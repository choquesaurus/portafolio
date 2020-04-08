import React from 'react';
import Cardproyects from './Carproyects'
import Esqueleto from './skeleton';
export default function  Proyects(){
    const [proyects,setproyect]=React.useState([])
    const [load,setloading]=React.useState(false)
    

    React.useEffect( ()=>{
         godata()
    },[])
    
    async function godata(){
        await setloading(true)
        const request=await fetch('https://portafolio-backend.herokuapp.com/proyects');
        const data=await request.json()
        await setloading(false)
        setproyect(data)
       
    }
    return <div className="proyects">
        {
            load === true?
            <div style={{width:'100%',height:'100%',display:'flex',flexWrap:'wrap'}}>
               {[...Array(20).keys()].map(item=>{
                   return <Esqueleto  key={item.toString()}/>
                })}
            </div>
            :
            proyects.reverse().map(({_id,image,title,description,repository,goproyect})=>(
                <Cardproyects key={_id}   title={title} image={image} description={description} repository={repository} goproyect={goproyect} />
                ))
        }
      
    </div>
}
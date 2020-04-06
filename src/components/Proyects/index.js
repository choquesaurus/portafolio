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
        setloading(true)
        const request=await fetch('https://portafolio-backend.herokuapp.com/proyects');
        const data=await request.json()
        setproyect(data)
        setloading(false)
    }
    return <div className="proyects">
       

        {
            load === true?
            <div style={{width:'100%',height:'100%',display:'flex',flexWrap:'wrap'}}>
               {[...Array(20)].map(item=>(
                   <Esqueleto />
               ))}
            </div>
            
            :
            proyects.map(({_id,image,title,description,repository,goproyect})=>(
                    
                <Cardproyects key={_id} validatorSkeleton={load}  title={title} image={image} description={description} repository={repository} goproyect={goproyect} />
            
                ))
        }
      
    </div>
}
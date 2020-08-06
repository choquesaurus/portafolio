import React from 'react'
import Cardproyects from './Carproyects'
import Esqueleto from './skeleton'
import {Helmet} from  'react-helmet'
import axios from 'axios'
export default function  Proyects(){
    const [proyects,setproyect]=React.useState([])
    const [load,setloading]=React.useState(false)
    
    React.useEffect( ()=>{
         godata()
    },[])
    
    async function godata(){
        await setloading(true)

        //const request=await fetch('https://portafolio-backend.herokuapp.com/proyects');
        ///const request=await fetch('https://portafolio-functions-backend.vercel.app/api/lista');

        //const data=await request.json()
        const {data} = await axios.get('https://portafolio-functions-backend.vercel.app/api/lista')
        //console.log(data)
        await setloading(false)
        setproyect(data)
    }

    // const ScrollFunctions=(params)=>{
    //     let scrolltop=params.target.scrollTop;
    //     var offsetTop = document.getElementById('padresito').offsetTop;//cuantos pixeles existen la distancia desde el inicio del body alta el inicio del div 
    //     var height_div = document.getElementById('padresito').offsetHeight;
    //     //var clientHeight = document.getElementById('padresito').clientHeight;
        
    //     console.log("Hellow",params.target.scrollTop)
    //    }


    return <div 
    className="proyects"
    //onScroll={ScrollFunctions}
    >    
         <Helmet>
            <meta name='description' content='En la seccion de proyectos encontraras mis ejemplos de prueba o experimentación y proyectos que eh realizado '/>
            <title>Daniel | Proyectos </title>
        </Helmet>
        {
            load === true?
            <div style={{width:'100%',height:'100%',display:'flex',flexWrap:'wrap'}}>
               {[...Array(20).keys()].map(item=>{
                   return <Esqueleto  key={item.toString()}/>
                })}
            </div>
            :
            proyects.reverse().map(({_id,image,title,description,repository,goproyect},indice,)=>(
                <Cardproyects   key={_id} 
                    {...{title,image,description,repository,goproyect,indice}}
                //  title={title} image={image} description={description} repository={repository} goproyect={goproyect}
                  />
                ))
        }
      
    </div>
}
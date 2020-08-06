import React from 'react';
import Communityandfotosexpasion from './community_and_fotos_exapansion'
import {Helmet} from 'react-helmet'
export default function  Community(){
    return <>
     <Helmet>      
            <meta name='description' content='En la seccion de comunidad encontraras las fotos de las personas que forman parte de la comunidad , eventos y amigos relacionados ala tecnologia'/>
            <title>Daniel | Comunidad</title>       
        </Helmet>
    <Communityandfotosexpasion/> 
    </>
}
import React from 'react';
import '../../App.css'
import ControlledExpansionPanels from './expansion'
import ExpansionImagePortal from './expansionimage'
import {Helmet} from 'react-helmet'
export default function  Home(){
    
    return <div className='homepage'>
        <Helmet>
            <meta name='description' content='Hola soy Daniel Choquecahuana (choquesaurus) el fan de la curiosidad .
            Soy un persona autodidacta , apasionado por el codigo , diseño e innovacion'/>
            <title>Daniel | Home</title>
            
        </Helmet>
        <div className='homepage_info'>
            <ControlledExpansionPanels/>
        </div>


        <div className='homepage_foto'>
            <ExpansionImagePortal/>
        </div>
        {/* <AlertDialogSlide/> */}

        
    </div>
}
import React from 'react';
import '../../App.css'
import ControlledExpansionPanels from './expansion'
import ExpansionImagePortal from './expansionimage'
export default function  Home(){
    
    return <div className='homepage'>
      
        <div className='homepage_info'>
            <ControlledExpansionPanels/>
        </div>


        <div className='homepage_foto'>
            <ExpansionImagePortal/>
        </div>
        {/* <AlertDialogSlide/> */}

        
    </div>
}
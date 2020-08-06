import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Tooltip} from '@material-ui/core';
import 'animate.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Communityandfotosexpasion() {
  const [open, setOpen] = React.useState(false);
  const [image,setImage] = React.useState(''); 
  const handleClickOpen = (e) => {
    setImage(e.target.src)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div className='Community_and_fotos'>
        {[...new Array(9).keys()].reverse().map((item,indice)=>(
              <div 
               className={`images_Community_and_fotos ${indice % 2 === 0?'animate__animated animate__fast  animate__backInLeft':'animate__animated animate__fast animate__backInRight'}`}
              
               key={"echo"+indice}>
              <Tooltip title='Click para expandir la imagen :D ' placement='top' arrow>
              <img
                alt='echo'
                onClick={handleClickOpen}
                style={{width:'100%',height:'100%',objectFit:'cover',cursor:'pointer'}}
                src={`https://data-examples-dev.s3.us-east-2.amazonaws.com/${item}.jpg`}
              />
                </Tooltip>
          </div>
         ))}  
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Imagen centrada , para una mejor vista  :D"}</DialogTitle>
        <DialogContent>         
        <img
                alt='texto decorativo'
                 style={{width:'100%',height:'100%',objectFit:'cover'}}
                src={image}
                
            />
        </DialogContent>
      </Dialog>
    </div>
  );
}

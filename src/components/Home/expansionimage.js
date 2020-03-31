import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Tooltip} from '@material-ui/core'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExpansionImagePortal() {
  const [open, setOpen] = React.useState(false);
  const [image,setImage]= React.useState('');
  const handleClickOpen = (e) => {
    setImage(e.target.src)

    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Click en la imagen para expandirla :D '   placement='top'>            
            <img
                alt='Image penging :D'
                onClick={handleClickOpen}
                src='https://data-examples-dev.s3.us-east-2.amazonaws.com/portal.jpg'
            />
            </Tooltip>
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
                 style={{width:'100%',height:'100%',objectFit:'cover'}}
                src={image}
                alt='Image penging'
            />
        </DialogContent>
      </Dialog>
    </>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ChatIcon from '@material-ui/icons/Chat';
import { Tooltip } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogFlow() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
     <div>
      <Tooltip title={"¿ En que te puedo ayudar ?"}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}
      style={{position:'absolute',right:'25px',top:'45px',  background: "white"}}
      >
        <ChatIcon style={{fontSize:'45px',color:'#2979ff'}}/>
      </Button>
      </Tooltip> 
      <Dialog
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Hey, conversa conmigo virtualmente"}</DialogTitle>
        <DialogContent
        style={{display:'flex',padding:"5px 0px 6px",marginRight:"5px"}}
        >
          <iframe
                style={{margin:"auto"}}
                title="This is a unique title" 
                allow="microphone;"
                width="330"
                height="480"
                src="https://console.dialogflow.com/api-client/demo/embedded/3a05e93c-fe3c-4cbf-b46d-577b580fa7f6">
            </iframe>
        </DialogContent>    
      </Dialog>
    </div>
  );
}

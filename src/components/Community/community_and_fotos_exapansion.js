import React from 'react';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Tooltip} from '@material-ui/core'


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
        {[...new Array(9).keys()].reverse().map((e,i)=>(
              <div className='images_Community_and_fotos' key={"echo"+i}>
              <Tooltip title='Click para expandir la imagen :D ' placement='top' arrow>
              <img
                onClick={handleClickOpen}
                style={{width:'100%',height:'100%',objectFit:'cover',cursor:'pointer'}}
                src={`https://data-examples-dev.s3.us-east-2.amazonaws.com/${e}.jpg`}
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
                 style={{width:'100%',height:'100%',objectFit:'cover'}}
                src={image}
                alt='Image penging'
            />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

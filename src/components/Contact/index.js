import React,{useRef} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Tooltip } from '@material-ui/core';
import {ToastContainer,toast} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function FormContact() {
  const [open, setOpen] = React.useState(false);
  const [emailerror,setEmailError] = React.useState(false);
  const [msjerror,setmsjError] = React.useState(false);
  const email=useRef('');
  const msj=useRef('');
  // const [obj,setObj]=React.useState({
  //   address:'',
  // })
  // const CambioData = async (e)=>{
    //   await setObj({...obj,
    //   mensaje:''
  //     [e.target.name]:e.target.value
  //   })
  // }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const SendMail= async() =>{
    
  let mensaje=msj.current.value;
  let correo=email.current.value; 
  if(!( mensaje.length > 0 ) || !(correo.length >0)){
 
  if( !( mensaje.length > 0 )){
        await setmsjError(true)
         setTimeout(()=>{
          //setmsjError(false)
           setmsjError(false);
        },600);
  }
  if(!( correo.length > 0)){
    await setEmailError(true)
     setTimeout(()=>{
      //setmsjError(false)
       setEmailError(false);
    },600);
  }
}
  else{
  try {
      await handleClose();
      await toast.info("Enviando mensaje ... ", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });


      //const request = await fetch('https://portafolio-backend.herokuapp.com/send',{
    // const {data:{message}} = await axios.post('https://portafolio-functions-backend.vercel.app/api/msj',{msj:mensaje,email:correo},
    // {headers:{"Access-Control-Allow-Origin":'*',"Access-Control-Allow-Credentials":true}})
    //console.log(data)  
    const request = await fetch('https://portafolio-functions-backend.vercel.app/api/msj',{
    method:'POST',
      headers:{
        "Access-Control-Allow-Origin":'*',
        "Access-Control-Allow-Credentials":true,
        "content-type":"application/json"
      },
      body:JSON.stringify({msj:mensaje,email:correo})
    })
      const {message} = await request.json();
      await toast.success(message, {
      position: "top-center",
      autoClose: 4000,
      closeOnClick: true,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true
      });
      msj.current.value=''
      email.current.value=''
  }   catch (error) {
      await toast.error(error, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
  }
}
  }
  return (
    <div>
      <ToastContainer/>
        <Tooltip title='Contactame' arrow>
            <Typography onClick={handleClickOpen} style={{cursor:'pointer'}}>
                Contacto
            </Typography>
        </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  
        <DialogTitle id="form-dialog-title">Contáctame</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {/* {
            obj.address+" , "+obj.mensaje
          } */}
          Para suscribirse a este sitio web, ingrese su dirección de correo electrónico y luego su mensaje aquí . Le enviaremos actualizaciones de vez en cuando.
          
          </DialogContentText>
          {
            emailerror === true ?
            <TextField
            fullWidth
            autoComplete="off"
            error 
            label="Ingresa tu correo . . ."
            id = "standard-error-helper-text" 
            helperText="Campo obligatorio !"
            />
            :
            <TextField
            //onChange={CambioData}
            inputRef={email}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            //name='address'
            fullWidth
            //required
            />
            }

            {
              msjerror === true ? 
              <TextField
              fullWidth
              autoComplete="off"
              error 
              label="Ingresa tu mensaje . . ."
              id = "standard-error-helper-text" 
              helperText="Campo obligatorio !"
          />
          :

          <TextField
          //onChange={CambioData}
          inputRef={msj}
          margin="dense"
          id="message"
          label="Ingrese un pequeño mensaje"
          //name='mensaje'
          fullWidth
          autoComplete="off"
          //required
        />
            }
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel {msjerror}
          </Button>
          {
            msjerror === true || emailerror === true?
            <Button  color="primary" onClick={SendMail} disabled>
            Enviar
          </Button>
          :
              <Button  color="primary" onClick={SendMail}>
              Enviar
            </Button>
          }
          
        </DialogActions>
        
       {/* <form method='POST' action='https://formspree.io/daniechoque159@gmail.com'>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Para suscribirse a este sitio web, ingrese su dirección de correo electrónico y luego su mensaje aquí . Le enviaremos actualizaciones de vez en cuando.
          
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            name='email'
            fullWidth
            required
            />
        <TextField
            
            margin="dense"
            id="message"
            label="Ingrese un pequeño mensaje"
            name='message'
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type='submit' color="primary">
            Enviar
          </Button>
        </DialogActions>
        </form> */}
      </Dialog>
    </div>
  );
}

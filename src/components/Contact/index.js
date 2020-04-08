import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Tooltip } from '@material-ui/core';

export default function FormContact() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title='Contactame' arrow>
            <Typography onClick={handleClickOpen} style={{cursor:'pointer'}}>
                Contacto
            </Typography>
        </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
       <form method='POST' action='https://formspree.io/daniechoque159@gmail.com'>
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
        </form>
      </Dialog>
    </div>
  );
}

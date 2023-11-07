import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useContext} from 'react';
import { ModeContext } from "../contexts/ModeContext";   


export default function ContactForm()  {
  const {Modo} = useContext(ModeContext)
  return (
    
    <Container>
      <form>
        <TextField style={{filter: Modo ? "none" : "invert(1)"}}
          label="Nombre"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField style={{filter: Modo ? "none" : "invert(1)"}}
          label="Correo Electrónico"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField style={{filter: Modo ? "none" : "invert(1)"}}
          label="Mensaje"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" >
          Enviar
        </Button>
      </form>
    </Container>
  );
};


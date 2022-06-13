
import React from 'react';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import {Routes, Route, useNavigate} from 'react-router-dom';

function ButtonCita(props) {
  const navigate = useNavigate();

  const navigateToCita = () => {
    // 👇️ navigate to /crearCita
    navigate('/crearCita');
  };

  return (
    
    <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center" 
         >
            <Button variant="contained" onClick={navigateToCita} className="crearButton" >Crear cita</Button>
    </Box>

        
    
  );
}

export default ButtonCita;


import React, { useState } from "react";
import SidebarLayout from '../../Layouts/SidebarLayout';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { useNavigate} from 'react-router-dom';

export default function MedicalCenter() {
  const navigate = useNavigate();
  const [establecimiento, setSelected] = React.useState('');
  function handleChange(event) {
    setSelected(event.target.value);
  }
  const navigateToCrearCita = () => {
    // 👇️ navigate to /crearCita
    navigate('/citas/crearCita');
  };
  
  return (
    <SidebarLayout>
    <Box
        m={1}
        display="flex"
        
        alignItems="left" 
         >
            <ArrowBackIosIcon onClick={navigateToCrearCita} sx={{cursor:'pointer'}} />
    </Box>
    <FormControl sx={{ m: 1, minWidth: 175 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Establecimiento</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={establecimiento}
          label="Establecimiento"
          onChange={handleChange}
        >
          <MenuItem >Sauces</MenuItem>
          <MenuItem >Durán</MenuItem>
          
        </Select>
      </FormControl>

    </SidebarLayout>
  );
}
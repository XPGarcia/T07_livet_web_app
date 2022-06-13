import React, { useState } from "react";
import SidebarLayout from '../../Layouts/SidebarLayout';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MedicalCenter() {
  
  const [establecimiento, setSelected] = React.useState('');
  function handleChange(event) {
    setSelected(event.target.value);
  }
  
  return (
    <SidebarLayout>
    
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
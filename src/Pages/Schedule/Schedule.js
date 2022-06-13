import React from 'react';
import Calendar from '../../Components/Calendar/Calendar';
import ButtonCita from '../../Components/Button/ButtonCita';
import SidebarLayout from '../../Layouts/SidebarLayout';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import {Routes, Route, useNavigate} from 'react-router-dom';
function Schedule(props) {
  
  return(
    <SidebarLayout>
      <Calendar />
      <ButtonCita />
    </SidebarLayout>
  );
}

export default Schedule;
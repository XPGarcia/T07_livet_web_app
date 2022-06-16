
import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

import classes from './FloatingButton.module.css';
import { useNavigate } from 'react-router-dom';

function FloatingButton(props) {
  const navigate = useNavigate();

  const navigateToCita = () => {
    // 👇️ navigate to /crearCita
    navigate('/crearCita');
  };

  return (
    <Tooltip className={classes.floatingBtn} TransitionComponent={Zoom} title="Crear cita">
      <Zoom
        in={true}
        timeout={{ enter: 500, exit: 500 }}
        unmountOnExit
      >
        <Fab variant="extended" color="primary" onClick={navigateToCita} aria-label="crear cita">
          <CreateIcon color="white" sx={{ mr: 1 }} />
          Crear cita
        </Fab>
      </Zoom>
    </Tooltip>
  );
}

export default FloatingButton;
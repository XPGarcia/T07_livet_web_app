import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';

function CustomButton(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: props.color,
        contrastText: (props.contratText ?? "#FFFFFF")
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
      >
        {props.children}
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
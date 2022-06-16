import React from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";

function CustomButton(props) {
  const { color, contrastText, children } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
        contrastText: contrastText ?? "#FFFFFF"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">{children}</Button>
    </ThemeProvider>
  );
}

export default CustomButton;

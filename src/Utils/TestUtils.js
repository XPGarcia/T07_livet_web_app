import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import store from "../Store/index";

const theme = createTheme({
  palette: {
    primary: {
      main: "#256FB5"
    },
    secondary: {
      main: "#26B1FF"
    },
    white: {
      main: "#FFFFFF"
    },
    neutral: {
      main: "#64748B"
    }
  }
});

function renderWithSettings(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithSettings;

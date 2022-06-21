import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { sessionService } from "redux-react-session";
import store from "./Store/index";
import { checkTimeout } from "./Store/auth";
import Router from "./Routes";

function App() {
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

  const validateSession = (session) => {
    const timeout = checkTimeout(session.refreshDate);
    // session in not timeout
    return !timeout;
  };

  sessionService.initSessionService(store, {
    redirectPath: "/login",
    driver: "LOCALSTORAGE",
    validateSession
  });

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

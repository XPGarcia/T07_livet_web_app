import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { sessionService } from 'redux-react-session';
import store from './Store/index';
import { checkTimeout } from './Store/auth';
import Router from './Routes';

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
      }
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: "#26B1FF",
            borderRight: "none"
          },
          icon: {
            color: "#FFFFFF"
          }
        }
      }
    }
  });

  const validateSession = (session) => {
    const timeout = checkTimeout(session['refreshDate']);
    // session in not timeout
    return !timeout;
  };

  sessionService.initSessionService(store, { redirectPath: '/login', driver: 'LOCALSTORAGE', validateSession });

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

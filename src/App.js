import Login from './Pages/Login/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SecreatryRouter from './Routes/Secretary/SecretaryRouter';
import { useSelector } from 'react-redux';

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

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  console.log(isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <SecreatryRouter />}
    </ThemeProvider>
  );
}

export default App;

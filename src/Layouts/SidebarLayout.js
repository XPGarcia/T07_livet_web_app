import CustomSidebar from '../UI/CustomSidebar/CustomSidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import routes from '../Routes/Secretary/Routes';

const drawerWidth = 240;

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

function SidebarLayout(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <CustomSidebar routes={routes} drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${props.drawerWidth}px)` } }}
        >
          <Toolbar sx={{ display: { sm: 'none' } }} />
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SidebarLayout;
import React from "react";

import "./CustomSidebar.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomLink from "../../Utils/CustomLink";
import ProfilePic from "../../Components/ProfilePic/ProfilePic";

import { logout } from "../../Store/auth";

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

function CustomSidebar(props) {
  const { routes, drawerWidth } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const drawer = (
    <div>
      <Box sx={{ mt: 2 }}>
        <ProfilePic name="Sr Anónimo" />
      </Box>
      <Divider />
      <List>
        {routes.map((route) => (
          <CustomLink
            key={route.name}
            to={route.link}
            style={{ textDecoration: "none" }}
          >
            <ListItem key={route.name} sx={{ color: "#FFFFFF" }} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#FFFFFF" }}>
                  {route.icon ?? <CheckIcon />}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          </CustomLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          color="primary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
          <Box
            sx={{
              position: "relative",
              display: "block",
              height: "100%"
            }}
          >
            <Button
              variant="contained"
              color="error"
              className="logoutButton"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
          <Box
            sx={{
              position: "relative",
              display: "block",
              height: "100%"
            }}
          >
            <Button
              variant="contained"
              color="error"
              className="logoutButton"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default CustomSidebar;

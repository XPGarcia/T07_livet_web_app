import React from 'react';

import './CustomSidebar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfilePic from '../../Components/ProfilePic/ProfilePic';
import CustomLink from '../../Utils/CustomLink';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../Store/auth';

function CustomSidebar(props) {
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
    } catch (e) {
      console.log(e);
    }
  }

  const drawer = (
    <div>
      <Box sx={{ mt: 2 }}>
        <ProfilePic name="Sr Anónimo" />
      </Box>
      <Divider />
      <List>
        {props.routes.map((route, index) => (
          <CustomLink key={index} to={route.link} style={{ textDecoration: 'none' }}>
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

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${props.drawerWidth}px)` },
          ml: { sm: `${props.drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{ display: { sm: 'none' } }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
        sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          color="primary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
        >
          {drawer}
          <Box sx={{
            position: 'relative',
            display: 'block',
            height: '100%'
          }}>
            <Button variant="contained" color="error" className="logoutButton" onClick={handleLogout}>Cerrar sesión</Button>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
          open
        >
          {drawer}
          <Box sx={{
            position: 'relative',
            display: 'block',
            height: '100%'
          }}>
            <Button variant="contained" color="error" className="logoutButton" onClick={handleLogout}>Cerrar sesión</Button>
          </Box>
        </Drawer>
      </Box>
    </div>
  );

};

export default CustomSidebar;
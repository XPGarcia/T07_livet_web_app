import CustomSidebar from '../UI/CustomSidebar/CustomSidebar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { secretaryRoutes } from '../Routes/SecretaryRoutes';
import { doctorRoutes } from '../Routes/DoctorRoutes';
import Roles from '../Utils/Roles';
import { hasRole } from '../Store/auth';

const drawerWidth = 240;

function SidebarLayout(props) {
  let routes;
  if (hasRole(Roles.SECRETARY)) routes = secretaryRoutes;
  else if (hasRole(Roles.DOCTOR)) routes = doctorRoutes;

  return (
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
  );
}

export default SidebarLayout;
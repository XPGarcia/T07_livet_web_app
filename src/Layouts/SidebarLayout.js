import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CustomSidebar from "../UI/CustomSidebar/CustomSidebar";

import secretaryRoutes from "../Routes/Secretary/routes";
import doctorRoutes from "../Routes/Doctor/routes";
import Roles from "../Utils/Roles";
import { hasRole } from "../Store/auth";

const drawerWidth = 240;

function SidebarLayout(props) {
  const { children } = props;
  let routes;
  if (hasRole(Roles.SECRETARY)) routes = secretaryRoutes;
  else if (hasRole(Roles.DOCTOR)) routes = doctorRoutes;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomSidebar routes={routes} drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }} />
        {children}
      </Box>
    </Box>
  );
}

export default SidebarLayout;

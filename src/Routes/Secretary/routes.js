import React from "react";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const secretaryRoutes = [
  {
    name: "Citas",
    link: "/citas",
    icon: <EventIcon />
  },
  {
    name: "Pacientes",
    link: "/pacientes",
    icon: <PeopleIcon />
  },
  {
    name: "Doctores",
    link: "/doctores",
    icon: <ManageAccountsIcon />
  }
];

export default secretaryRoutes;

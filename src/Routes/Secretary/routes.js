import React from "react";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";

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
  }
];

export default secretaryRoutes;

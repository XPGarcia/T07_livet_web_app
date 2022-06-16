import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";

const doctorRoutes = [
  {
    name: "Consultas",
    link: "/consultas",
    icon: <ArticleIcon />
  },
  {
    name: "Pacientes",
    link: "/pacientes",
    icon: <PeopleIcon />
  }
];

export default doctorRoutes;

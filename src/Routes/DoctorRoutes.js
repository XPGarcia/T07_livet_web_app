import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import {
  Routes,
  Route
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import Landing from '../Pages/Home/Landing';
import Protected from '../Utils/Protected';
import PacientList from '../Pages/Pacients/PacientList';
import MedicalAppointment from '../Pages/MedicalAppointment/MedicalAppointment';

const doctorRoutes = [
  {
    "name": "Consultas",
    "link": "/consultas",
    "icon": <ArticleIcon />,
    "component": <MedicalAppointment />
  },
  {
    "name": "Pacientes",
    "link": "/pacientes",
    "icon": <PeopleIcon />,
    "component": <PacientList />
  }
];

function DoctorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      {doctorRoutes.map((route, index) => (
        <Route key={index} path={route.link} element={<Protected>{route.component}</Protected>} />
      ))}
      <Route path="*" element={<Protected><Landing /></Protected>} />
    </Routes>
  );
}

export { DoctorRoutes, doctorRoutes };

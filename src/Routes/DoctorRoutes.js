import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';

import {
  Routes,
  Route
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import Landing from '../Pages/Home/Landing';
import Home from '../Pages/Home/Home';
import Protected from '../Utils/Protected';
import PacientList from '../Pages/Pacients/PacientList';

const doctorRoutes = [
  {
    "name": "Home",
    "link": "/home",
    "icon": <HomeIcon />,
    "component": <Home />
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

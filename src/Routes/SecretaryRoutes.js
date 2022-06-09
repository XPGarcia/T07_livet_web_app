import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';

const secretaryRoutes = [
  {
    "name": "Home",
    "link": "/",
    "icon": <HomeIcon />
  },
  {
    "name": "Citas",
    "link": "/citas",
    "icon": <EventIcon />
  },
  {
    "name": "Pacientes",
    "link": "/pacientes",
    "icon": <PeopleIcon />
  }
];

export default secretaryRoutes;
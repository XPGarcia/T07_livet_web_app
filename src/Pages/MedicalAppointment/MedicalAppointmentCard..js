import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatDate, formatTime } from "../../Utils/Dates";

function MedicalAppointmentCard({ appointment, style }) {
  const navigate = useNavigate();
  // const timeRange = [
  //   new Date(appointment.startDate).getTime(),
  //   new Date(appointment.endDate).getTime()
  // ];
  const isOnTime = () =>
    // const now = new Date().getTime();
    // return now <= timeRange[0];
    true;
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 345, padding: "15px 10px" }}
      style={style}
    >
      <CardContent sx={{ paddingBottom: 0, paddingTop: 1 }}>
        <Grid container sx={{ paddingBottom: 1 }}>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <PersonIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </Grid>
          <Grid item xs={10} sx={{ display: "flex", textAlign: "center" }}>
            <Typography variant="body1" color="text">
              {appointment.patient}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ paddingBottom: 1 }}>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <EventIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </Grid>
          <Grid item xs={10} sx={{ display: "flex", textAlign: "center" }}>
            <Typography variant="body1" color="text">
              {formatDate(appointment.startDate)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ paddingBottom: 1 }}>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <AccessTimeIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </Grid>
          <Grid item xs={10} sx={{ display: "flex", textAlign: "center" }}>
            <Typography variant="body1" color="text">
              {`${formatTime(appointment.startDate)} - ${formatTime(
                appointment.endDate
              )}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => navigate(`/consultas/${appointment.id}`)}
          disabled={!isOnTime()}
        >
          Ir a consulta
        </Button>
        <Button variant="outlined" color="error">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}

export default MedicalAppointmentCard;

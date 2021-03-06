import React from "react";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { formatTime } from "../../Utils/Dates";
import { getSpecialtyName, pickSpecialtyColor } from "../../Utils/Specialties";

import classes from "./DoctorCard.module.css";

function DoctorCard({ doctor, medicalCenter, onScheduleClicked }) {
  const appointment = useSelector((state) => state.appointment);
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 3, p: 1 }}>
      <CardContent>
        <Typography className={classes.name} color="primary" variant="body1">
          {doctor.name}
        </Typography>
        <Typography
          className={classes.specialty}
          color={pickSpecialtyColor(doctor.specialty)}
          variant="caption"
        >
          {getSpecialtyName(doctor.specialty)}
        </Typography>
        <Typography
          className={classes.medicalCenter}
          color="text.secondary"
          variant="caption"
        >
          {medicalCenter}
        </Typography>
        <Box pt={1}>
          {doctor.schedule.map((data) => (
            <Chip
              key={data.id}
              sx={{ m: 1, minWidth: "85px" }}
              color="primary"
              variant={
                appointment.schedule.id === data.id ? "contained" : "outlined"
              }
              label={formatTime(data.startDate)}
              onClick={() => onScheduleClicked(doctor, data)}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;

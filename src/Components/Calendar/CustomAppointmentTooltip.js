import React from "react";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { Grid } from "@mui/material";
import { Lens } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { pickSpecialtyColor } from "../../Utils/Specialties";
import { formatDate, formatTime } from "../../Utils/Dates";

import classes from "./CustomAppointmentTooltip.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton";

function TooltipContent({ appointmentData }) {
  return (
    <div className={classes.content}>
      <Grid
        container
        alignItems="flex-start"
        className={classes.titleContainer}
      >
        <Grid item xs={2} className={classes.textCenter}>
          <Lens
            className={classes.lens}
            sx={{ color: pickSpecialtyColor(appointmentData.code) }}
          />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div className={`${classes.title} ${classes.dateAndTitle}`}>
              {appointmentData.title}
            </div>
            <div className={`${classes.text} ${classes.dateAndTitle}`}>
              {formatDate(appointmentData.startDate)}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <PersonIcon className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{appointmentData.patient}</span>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <AccessTimeIcon className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{`${formatTime(appointmentData.startDate)} - ${formatTime(
            appointmentData.startDate
          )}`}</span>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.container}
        sx={{ justifyContent: "center" }}
      >
        <CustomButton color={pickSpecialtyColor(appointmentData.code)}>
          Tomar datos
        </CustomButton>
      </Grid>
    </div>
  );
}

function CustomAppointmentTooltip() {
  return (
    <AppointmentTooltip
      contentComponent={TooltipContent}
      showCloseButton
      showDeleteButton
    />
  );
}

export default CustomAppointmentTooltip;

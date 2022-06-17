import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import { formatDate, formatTime } from "../../Utils/Dates";

function MedicalAppointmentRow({ appointment }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 1 }}>
      <CardContent
        sx={{
          paddingTop: 2,
          paddingBottom: "10px !important",
          paddingLeft: 1,
          paddingRight: 3
        }}
      >
        <Grid container>
          <Grid item md={6}>
            <Grid container>
              <Grid item xs={2} md={1} sx={{ textAlign: "center" }}>
                <PersonIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </Grid>
              <Grid
                item
                xs={10}
                md={11}
                sx={{ display: "flex", textAlign: "center" }}
              >
                <Typography variant="body2" color="text">
                  {appointment.patient}
                </Typography>
              </Grid>
              <Grid item xs={2} md={1} sx={{ textAlign: "center" }}>
                <EventIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </Grid>
              <Grid
                item
                xs={10}
                md={11}
                sx={{ display: "flex", textAlign: "center" }}
              >
                <Typography variant="body2" color="text">
                  {formatDate(appointment.startDate)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Grid item sx={{ display: "flex", textAlign: "center" }}>
                <Typography variant="body2" color="text">
                  {`${formatTime(appointment.startDate)} - ${formatTime(
                    appointment.endDate
                  )}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MedicalAppointmentRow;

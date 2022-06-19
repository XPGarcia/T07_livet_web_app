import { Box, Grid, Button } from "@mui/material";
import React from "react";
import LabeledData from "../LabeledData/LabeledData";
import image from "../../Assets/profile-pic.png";
import styles from "./DoctorData.module.css";

function DoctorData({ doctor, style }) {
  return (
    <Box style={style} gap={2} className={styles["doctor-info"]}>
      <Grid sx={{ mt: 2 }} className={styles["profilo-info__pic-container"]}>
        <img
          src={image}
          alt="profile_pic"
          className={styles["profile-info__pic"]}
        />
      </Grid>
      <Grid>
        <LabeledData label={doctor.specialties} data={doctor.name} />
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" className="crearButton">
            Disponibilidad
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default DoctorData;

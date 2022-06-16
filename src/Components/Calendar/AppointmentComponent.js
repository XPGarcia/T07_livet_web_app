import React from "react";
import classes from "./AppointmentComponent.module.css";
import { formatTime } from "../../Utils/Dates";

function AppointmentComponent(props) {
  const { data } = props;
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.textContainer}>
          <div className={classes.text}>{data.patient}</div>
          <div className={classes.time}>{formatTime(data.startDate)}</div>
          <div className={classes.time}> - </div>
          <div className={classes.time}>{formatTime(data.endDate)}</div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentComponent;

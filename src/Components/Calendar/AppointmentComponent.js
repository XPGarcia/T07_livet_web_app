import classes from './AppointmentComponent.module.css';
import { formatTime } from '../../Utils/Dates';

function AppointmentComponent(props) {
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <div className={classes.title}>{props.data.title}</div>
        <div className={classes.textContainer}>
          <div className={classes.text}>{props.data.patient}</div>
          <div className={classes.time}>{formatTime(props.data.startDate)}</div>
          <div className={classes.time}>  -  </div>
          <div className={classes.time}>{formatTime(props.data.endDate)}</div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentComponent;
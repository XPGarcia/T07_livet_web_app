import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { pickColor } from '../../Utils/Specialties';



function Appointment({ children, style, ...restProps }) {
  const color = pickColor(restProps.data.code);

  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: color,
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );
}

export default Appointment;
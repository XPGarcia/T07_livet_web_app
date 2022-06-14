import { DateNavigator } from "@devexpress/dx-react-scheduler";
import { formatDate } from "../../Utils/Dates";
import { useSelector } from 'react-redux';

function NavigatorProps(props) {
  const currentDate = useSelector(state => state.calendar.currentDate);
  console.log(formatDate(currentDate));

  return (
    <DateNavigator.RootProps
    {...props}
    >
    {props.children}
    </DateNavigator.RootProps>
  );
};

export default NavigatorProps;
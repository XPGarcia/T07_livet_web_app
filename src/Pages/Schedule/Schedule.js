import React from 'react';
import Calendar from '../../Components/Calendar/Calendar';
import SidebarLayout from '../../Layouts/SidebarLayout';

function Schedule(props) {
  return(
    <SidebarLayout>
      <Calendar />
    </SidebarLayout>
  );
}

export default Schedule;
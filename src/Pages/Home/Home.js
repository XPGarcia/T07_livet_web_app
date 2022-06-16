import React from 'react';
import SidebarLayout from '../../Layouts/SidebarLayout';
import { Permissions } from '../../Store/auth';

function Home(props) {
  return (
    <SidebarLayout>
      <h2>Hola, soy el HOME</h2>
    </SidebarLayout>
  );
}

export default Home;
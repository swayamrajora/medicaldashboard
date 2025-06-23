import React from 'react';
import StatsCards from '../Components/StatsCards';
import OverviewChart from '../Components/OverviewChart';
import AppointmentList from '../Components/AppointmentList';
import PatientTable from '../Components/PatientTable';

const Dashboard = () => {
  return (
    <div>
      <h2>Good Morning, Dr. Swayam!</h2>
      <p>Overview of all of your patients and your income</p>
      <StatsCards />
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <OverviewChart />
        <AppointmentList />
      </div>
      <PatientTable/>
    </div>
  );
};

export default Dashboard;

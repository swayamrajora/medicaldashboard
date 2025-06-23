import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import './Sidebar.css';

const menuItems = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'Patients', icon: <PeopleIcon /> },
  { label: 'Message', icon: <MessageIcon /> },
  { label: 'Appointments', icon: <EventNoteIcon /> },
  { label: 'Billing', icon: <ReceiptIcon /> },
  { label: 'Transactions', icon: <PaymentIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
  { label: 'Chat & Support', icon: <SupportAgentIcon /> },
  { label: 'Help Center', icon: <HelpOutlineIcon /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Typography variant="h6" className="logo">Medisight</Typography>
      <List>
        {menuItems.map(item => (
          <ListItem button key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;

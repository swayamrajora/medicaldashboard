import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
} from '@mui/material';
import './AppointmentList.css';

const appointments = [
  {
    name: 'Sarah Johnson',
    time: '10:30 AM',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'Confirmed',
  },
  {
    name: 'Daniel Smith',
    time: '11:15 AM',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    status: 'Pending',
  },
  {
    name: 'Emily Brown',
    time: '12:00 PM',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    status: 'Confirmed',
  },
  {
    name: 'Robert Lee',
    time: '2:45 PM',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    status: 'Cancelled',
  },
];

const AppointmentList = () => {
  return (
    <Card className="appointment-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Today’s Appointments
        </Typography>
        <List>
          {appointments.map((appt, index) => (
            <ListItem key={index} className="appointment-item">
              <ListItemAvatar>
                <Avatar src={appt.avatar} />
              </ListItemAvatar>
              <ListItemText primary={appt.name} secondary={appt.time} />
              <Chip
                label={appt.status}
                color={
                  appt.status === 'Confirmed'
                    ? 'success'
                    : appt.status === 'Pending'
                    ? 'warning'
                    : 'error'
                }
                size="small"
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AppointmentList;

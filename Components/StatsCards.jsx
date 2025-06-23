import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Link,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const stats = [
  {
    title: 'Total Patients',
    value: 579,
    icon: <GroupIcon />,
    percent: '+15%',
  },
  {
    title: 'Total Appointment',
    value: 54,
    icon: <EventAvailableIcon />,
    percent: '+10%',
  },
  {
    title: 'Total Income',
    value: '$8,399.24',
    icon: <MonetizationOnIcon />,
    percent: '+28%',
  },
  {
    title: 'Total Treatments',
    value: 112,
    icon: <LocalHospitalIcon />,
    percent: '+12%',
  },
];

const StatsCards = () => {
  return (
    <Grid container spacing={2} mt={2} mb={7}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            elevation={0}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 3,
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <CardContent sx={{ paddingBottom: '10px !important' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: '#f5f5f5',
                    color: 'black',
                    width: 40,
                    height: 40,
                  }}
                  variant="rounded"
                >
                  {stat.icon}
                </Avatar>

                <Box display="flex" alignItems="center" gap={0.5}>
                  <TrendingUpIcon sx={{ fontSize: 18, color: 'green' }} />
                  <Typography variant="caption" color="green">
                    {stat.percent}
                  </Typography>
                </Box>
              </Box>

              <Box mt={2}>
                <Typography variant="subtitle2" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {stat.value}
                </Typography>
              </Box>
            </CardContent>

            <Box px={2} pb={1}>
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: 14, display: 'flex', alignItems: 'center', color: 'green', fontWeight: 500 }}
              >
                See details <ArrowForwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
              </Link>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import './OverviewChart.css';

const data = [
  { month: 'Jan', hospitalized: 120, outpatients: 100 },
  { month: 'Feb', hospitalized: 160, outpatients: 110 },
  { month: 'Mar', hospitalized: 130, outpatients: 98 },
  { month: 'Apr', hospitalized: 150, outpatients: 120 },
  { month: 'May', hospitalized: 140, outpatients: 125 },
  { month: 'Jun', hospitalized: 180, outpatients: 140 },
];

const OverviewChart = () => {
  return (
    <Card className="chart-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Hospitalized patients vs Outpatients
        </Typography>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hospitalized" stroke="#8884d8" name="Hospitalized patients" />
              <Line type="monotone" dataKey="outpatients" stroke="#82ca9d" name="Outpatients" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewChart;

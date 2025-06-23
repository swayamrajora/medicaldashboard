import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import './PatientTable.css';

const patients = [
  {
    id: 'P-001',
    name: 'Sarah Johnson',
    gender: 'Female',
    dob: '1990-05-14',
    age: 34,
    department: 'Cardiology',
  },
  {
    id: 'P-002',
    name: 'Daniel Smith',
    gender: 'Male',
    dob: '1985-08-22',
    age: 39,
    department: 'Neurology',
  },
  {
    id: 'P-003',
    name: 'Emily Brown',
    gender: 'Female',
    dob: '1992-01-09',
    age: 33,
    department: 'Dermatology',
  },
  {
    id: 'P-004',
    name: 'Robert Lee',
    gender: 'Male',
    dob: '1978-12-30',
    age: 46,
    department: 'Orthopedics',
  },
];

const PatientTable = () => {
  return (
    <div className="patient-table-container">
      <Typography variant="h6" gutterBottom>
        Patient List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="patients table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Patient ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.department}</TableCell>
                <TableCell>{patient.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientTable;

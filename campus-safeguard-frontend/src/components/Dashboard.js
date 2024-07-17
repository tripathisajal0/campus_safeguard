// src/components/Dashboard.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="body1">
        Welcome to the Campus SafeGuard dashboard.
      </Typography>
    </Box>
  );
};

export default Dashboard;

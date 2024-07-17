// src/components/PanicButton.js
import React, { useContext } from 'react';
import { Button, Box, Typography } from '@mui/material';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const PanicButton = () => {
  const { user } = useContext(AuthContext);

  const handlePanic = async () => {
    try {
      await axios.post('/api/alerts/panic', { userId: user._id });
      alert('Panic alert sent!');
    } catch (error) {
      console.error('Failed to send panic alert', error);
    }
  };

  return (
    <Box mt={5} textAlign="center">
      <Typography variant="h4" gutterBottom>Panic Button</Typography>
      <Button variant="contained" color="error" size="large" onClick={handlePanic}>
        Press in Case of Emergency
      </Button>
    </Box>
  );
};

export default PanicButton;

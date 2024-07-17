// src/components/Settings.js
import React, { useState, useContext } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [location, setLocation] = useState('');

  const handleSave = async () => {
    try {
      await axios.put(`/api/users/${user._id}/settings`, { location });
      alert('Settings saved!');
    } catch (error) {
      console.error('Failed to save settings', error);
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <Box mb={2}>
        <TextField
          label="Location"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Settings
      </Button>
    </Box>
  );
};

export default Settings;

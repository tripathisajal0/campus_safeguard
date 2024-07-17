// src/components/Signup.js
import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import AuthContext from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Signup;

import React from 'react';
import {
  Paper,
  Button,
  Typography,
} from '@mui/material';

const Header = ({ openModal }) => (
  <Paper sx={{ mb: 2, p: 2, bgcolor: 'common.white' }}>
    <Typography variant="h6" color="primary.light" sx={{ mb: 1 }}>Valdymo panėlė</Typography>
    <Button variant="contained" color="primary" onClick={openModal}>Sukurti naują prekę</Button>
  </Paper>
);

export default Header;

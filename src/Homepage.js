import * as React from 'react';
import Builder from './module/Builder';
import { Box } from '@mui/material';
import './Homepage.css';

function Homepage() {
  return (
    // Import & utilize Builder
    <Box 
      sx={{
        width: '100%'
      }}
    >
      <Builder />
    </Box>
  );
}

export default Homepage;

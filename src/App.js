import * as React from 'react';
//import Form from './NewForm';
import './App.css';
import Homepage from './Homepage';
import Form from './module/Form';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './module/Header';


function App() {
  
  React.useEffect(() => {
    document.title = "o-n-l";
  }, []);
  
  return (
    <Box id="backgroundFilter">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;

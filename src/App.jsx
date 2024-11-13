import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Tools from './components/Tools';
import { CompoundGrowth } from './calculators/CompoundGrowth';

function App() {
  return (
    <Router>
      <Box sx={{ height: '100%' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/compound-growth" element={<CompoundGrowth />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

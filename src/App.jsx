import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Tools from './components/Tools';
import { CompoundGrowth } from './calculators/CompoundGrowth';
import { Mortgage } from './calculators/Mortgage';

function App() {
  return (
    <Router>
      <Box sx={{ height: '100%' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/compound-growth" element={<CompoundGrowth />} />
          <Route path="/tools/mortgage" element={<Mortgage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavComp from './components/NavComp/NavComp';
import HomePage from './pages/HomePage';
import Roofing from './pages/Roofing';
import Windows from './pages/Windows';
import Plumbing from './pages/Plumbing';
import HVAC from './pages/HVAC';
import Solar from './pages/Solar';
import LawnCare from './pages/LawnCare';

function App() {
  return (
    <div className="App">
       <Router>
         <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/roofing' element={<Roofing />} />
          <Route exact path='/windows' element={<Windows />} />
          <Route exact path='/plumbing' element={<Plumbing />} />
          <Route exact path='/HVAC' element={<HVAC />} />
          <Route exact path='/solar' element={<Solar />} />
          <Route exact path='/lawn-care' element={<LawnCare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

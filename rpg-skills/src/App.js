import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import Level1Intro from './pages/Level1/Intro';
import Level1Main from './pages/Level1/Main';
import Level2Main from './pages/Level2/Main';
import Level3Main from './pages/Level3/Main';
import Level4Main from './pages/Level4/Main';
import Level5Main from './pages/Level5/Main';
import Conclusion from './pages/Conclusion/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/Level1Intro' element={<Level1Intro/>} />
            <Route path='/Level1Main' element={<Level1Main />} />
            <Route path='/Level2Main' element={<Level2Main />} />
            <Route path='/Level3Main' element={<Level3Main />} />
            <Route path='/Level4Main' element={<Level4Main />} />
            <Route path='/Level5Main' element={<Level5Main />} />
            <Route path='/Conclusion' element={<Conclusion />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

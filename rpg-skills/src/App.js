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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/Level1Intro' element={<Level1Intro/>} />
            <Route path='/Level1Main' element={<Level1Main />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

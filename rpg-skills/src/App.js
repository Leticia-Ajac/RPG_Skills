import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import Level1Intro from './pages/Level1/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/Level1Intro' element={<Level1Intro/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

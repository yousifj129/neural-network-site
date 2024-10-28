import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import React from 'react';
import { Home } from './pages/home/home';
import { Download } from './pages/download/download';
import { Ideas } from './pages/ideas/ideas';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/download" element={<Download />}/>
          <Route path="/ideas" element={<Ideas />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Maps from "./pages/Maps";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/Maps" component ={Maps} />
      </div>
    </Router>
    
  );
}

export default App;

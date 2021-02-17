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
        <Route path="/" component ={()=> <h1>YAY I'M a react app!</h1>} />
      </div>
    </Router>
    
  );
}

export default App;

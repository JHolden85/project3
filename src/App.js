import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Maps from "./pages/Maps";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/Maps" component ={Maps} />
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

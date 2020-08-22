import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/common/Button";
import LaunchPrograms from "./components/launchPrograms"
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterComponent from "./routing/RouterComponent";
// TODO: 
// Server Side Rendering
// Unit Test Cases
// Buttons in mobile view
// URL Change on filter
// CI Pipeline
// Code Deployment
// Build
// Readme
// Gzip

function App() {
  return (
    <div className="app">
      <div className="head">
        SpaceX Launch Programs
      </div>
      <RouterComponent></RouterComponent>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;

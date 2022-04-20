import { useState } from "react";
// import logo from './logo.svg'
import { Navbar } from "./components/Navbar";
import "./App.css";
import { DisplayData } from "./components/DisplayData";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DisplayData />
    </div>
  );
}

export default App;

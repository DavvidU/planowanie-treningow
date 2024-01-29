import React from 'react';
import TaskList from './checklist/TaskList';
import './checklist/TaskList.css';
import Navigation from "./navigation/Navigation";
import Home from './Home';
import logo from './logo.svg';
import './App.css';
//import { ListaOsob } from './osoby/Osoby';
//import { BazaOsob } from './osoby/Osoby';



function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
import React from 'react';
import TaskList from './checklist/TaskList';
import './checklist/TaskList.css';
import Navigation from "./navigation/Navigation";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1 className="task-list-header">Panel Główny</h1>
      <Navigation />
    </div>
  );
}

export default App;
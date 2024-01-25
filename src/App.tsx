import React from 'react';
import TaskList from './components/TaskList';
import './components/TaskList.css';
function App() {
  return (
    <div className="App">
      <h1 className="task-list-header">Lista ćwiczeń</h1>
      <TaskList />
    </div>
  );
}

export default App;
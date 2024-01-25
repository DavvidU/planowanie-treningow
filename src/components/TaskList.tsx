import React, { useState } from 'react';
import './TaskList.css';
interface Task {
    id: number;
    name: string;
    completed: boolean;
  }
  
  const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskName, setNewTaskName] = useState('');
  
    const addTask = () => {
      const newTask = { id: Date.now(), name: newTaskName, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    };
  
    const deleteTask = (taskId: number) => {
      setTasks(tasks.filter(task => task.id !== taskId));
    };
  
    const toggleTaskCompletion = (taskId: number) => {
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }));
    };
  
    return (
      <div className="task-list">
        <div className="add-task-section">
          <input 
            className="new-task-input"
            type="text"
            value={newTaskName}
            placeholder="Dodaj nowe ćwiczenie"
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button className="add-task-button" onClick={addTask}>Dodaj</button>
        </div>
        <div className="tasks-section">
          <div className="tasks-to-do">Ćwiczenia do wykonania: {tasks.filter(task => !task.completed).length}</div>
          {tasks.filter(task => !task.completed).map(task => (
            <div className="task" key={task.id}>
              <span>{task.name}</span>
              <button className="task-delete" onClick={() => deleteTask(task.id)}>Usuń</button>
              <button className="task-end" onClick={() => toggleTaskCompletion(task.id)}>Zakończ</button>
            </div>
          ))}
        </div>
        <div className="tasks-section">
          <div className="completed-tasks-title">Wykonane ćwiczenia: {tasks.filter(task => task.completed).length}</div>
          {tasks.filter(task => task.completed).map(task => (
            <div className="task completed" key={task.id}>
              <span>{task.name}</span>
              <button className="task-delete" onClick={() => deleteTask(task.id)}>Usuń</button>
              <button className="task-complete" onClick={() => toggleTaskCompletion(task.id)}>Zrobione</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TaskList;
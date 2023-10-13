import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, { text: task, id: tasks.length, isEditing: false }]);
      setTask('');
    }
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;

import React, { useState } from 'react';

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(task.isEditing);
  const [text, setText] = useState(task.text);

  const saveTask = () => {
    editTask(task.id, text);
    setIsEditing(false);
  }

  return (
    <li className="task-item">
      {isEditing ? (
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button className="save-button" onClick={saveTask}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.text}</span>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;

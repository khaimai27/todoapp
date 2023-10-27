// TodoApp.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskName, addTask, removeTask } from './componens/taskActions';

const TodoApp = () => {
  const taskName = useSelector(state => state.taskName);
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      alert('Nhap vao ten cong viec');
    } else {
      const newTask = {
        id: Date.now(),
        name: taskName,
      };
      dispatch(addTask(newTask));
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => dispatch(setTaskName(e.target.value))}
      />
      <button onClick={handleAddTask}>Add (1)</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleRemoveTask(task.id)}>X (2)</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

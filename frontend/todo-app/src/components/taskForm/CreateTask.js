// createTask.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addTask } from '../../redux/action';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.tasks); 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the addTask action with the task title
    dispatch(addTask(title))
      .then(() => {
        setTitle('');
        console.log("task added successfully")
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  return (
    <div className='container '>
      <h2>Create a Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={handleTitleChange}
        />
        <button type="submit">Create</button>
      </form>

      {taskState.loading && <p>Creating task...</p>}
      {taskState.error && <p>Error: {taskState.error}</p>}
    </div>
  );
};

export default CreateTask;

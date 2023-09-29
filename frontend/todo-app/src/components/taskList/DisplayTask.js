
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, updateTask, deleteTask } from '../../redux/action';
import "./displayTask.css"
const DisplayTask = () => {
    const dispatch = useDispatch();
    const taskState = useSelector((state) => state.tasks);

    useEffect(() => {
        // Fetch tasks when the component mounts
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleTaskStatusChange = async (task) => {
        const newStatus = !task.completed;
        await dispatch(updateTask(task._id, newStatus));
        dispatch(fetchTasks());
    };
    const handleTaskDelete = (taskId) => {
        dispatch(deleteTask(taskId));
        dispatch(fetchTasks());
    };
    return (
        <div className='container'>
            <h2>Task List</h2>
            {taskState.loading ? (
                <p>Loading...</p>
            ) : taskState.error ? (
                <p>Error: {taskState.error}</p>
            ) : (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskState.tasks.map((task) => (
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td>{task.completed ? 'Complete' : 'Incomplete'}</td>
                                <td>
                                    <button
                                        onClick={() => handleTaskStatusChange(task)}
                                        className={`status-button ${task.completed ? 'completed' : 'incomplete'}`}
                                    >
                                        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                                    </button>
                                </td>

                                <td><button className='deleteBtn' onClick={() => handleTaskDelete(task._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DisplayTask;

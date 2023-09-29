
import * as actionTypes from './actionType';
import axios from "axios";

export const signupRequest = () => ({
    type: actionTypes.SIGNUP_REQUEST,
});

export const signupSuccess = () => ({
    type: actionTypes.SIGNUP_SUCCESS,
});

export const signupFailure = (error) => ({
    type: actionTypes.SIGNUP_FAILURE,
    error,
});
//  login request
export const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST,
});


export const loginSuccess = (token) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: token,
});

// Action creator for login failure
export const loginFailure = (error) => ({
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
});
// Async action creator for signing up
export const signup = (formData) => {
    return async (dispatch) => {
        dispatch(signupRequest());

        try {
            const response = await fetch('http://localhost:3001/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // User signup was successful
                dispatch(signupSuccess());
            } else {
                // Handle signup errors
                const data = await response.json();
                dispatch(signupFailure(data.message));
            }
        } catch (error) {
            console.error('Signup failed.', error);
            dispatch(signupFailure('Signup failed.'));
        }
    };
};
// actions.js
export const addTaskRequest = () => ({
    type: actionTypes.ADD_TASK_REQUEST,
});

export const addTaskSuccess = () => ({
    type: actionTypes.ADD_TASK_SUCCESS,
});

export const addTaskFailure = (error) => ({
    type: actionTypes.ADD_TASK_FAILURE,
    payload: error,
});

export const addTask = (title) => {
    return async (dispatch) => {
        dispatch(addTaskRequest());

        try {
            // Make your HTTP POST request here
            await axios.post('http://localhost:3001/tasks/tasks', { title });

            dispatch(addTaskSuccess());
        } catch (error) {
            dispatch(addTaskFailure(error.message));
        }
    };
};
export const fetchTasksRequest = () => ({
    type: actionTypes.FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks) => ({
    type: actionTypes.FETCH_TASKS_SUCCESS,
    payload: tasks,
});

export const fetchTasksFailure = (error) => ({
    type: actionTypes.FETCH_TASKS_FAILURE,
    payload: error,
});
export const fetchTasks = () => {
    return async (dispatch) => {
        dispatch(fetchTasksRequest());

        try {
            // Make your HTTP GET request to fetch tasks from the dummy URL
            const response = await axios.get('http://localhost:3001/tasks/tasks');

            dispatch(fetchTasksSuccess(response.data));
        } catch (error) {
            dispatch(fetchTasksFailure(error.message));
        }
    };
};



export const updateTaskRequest = () => ({
    type: actionTypes.UPDATE_TASK_REQUEST,
});

export const updateTaskSuccess = (updatedTask) => ({
    type: actionTypes.UPDATE_TASK_SUCCESS,
    payload: updatedTask,
});

export const updateTaskFailure = (error) => ({
    type: actionTypes.UPDATE_TASK_FAILURE,
    payload: error,
});

export const updateTask = (taskId, completed) => {
    return async (dispatch) => {
        dispatch(updateTaskRequest());

        try {
            const response = await axios.put(
                `http://localhost:3001/tasks/tasks/${taskId}`,
                { completed }
            );

            const updatedTask = response.data;

            dispatch(updateTaskSuccess(updatedTask));
        } catch (error) {
            dispatch(updateTaskFailure(error.message));
        }
    };
};

export const deleteTaskRequest = () => ({
    type: actionTypes.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = (taskId) => ({
    type: actionTypes.DELETE_TASK_SUCCESS,
    payload: taskId,
});

export const deleteTaskFailure = (error) => ({
    type: actionTypes.DELETE_TASK_FAILURE,
    payload: error,
});

// Async action to delete a task
export const deleteTask = (taskId) => {
    return async (dispatch) => {
        dispatch(deleteTaskRequest());

        try {
            // Simulate an API request to delete the task
            // Replace the URL with your actual API endpoint
            await axios.delete(`http://localhost:3001/tasks/tasks/${taskId}`);

            dispatch(deleteTaskSuccess(taskId));
        } catch (error) {
            dispatch(deleteTaskFailure(error.message));
        }
    };
};




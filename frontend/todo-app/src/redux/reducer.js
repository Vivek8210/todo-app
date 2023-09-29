// reducer.js
import * as actionTypes from './actionType';

const initialState = {
    loading: false,
    error: null,
    success: false,
    token: null,
    isLoading: false,
    isLoggedIn: false,
    tasks: [],
    updatedTask: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case actionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                token: action.payload,
                isLoggedIn: true,
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case actionTypes.ADD_TASK_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case actionTypes.ADD_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case actionTypes.FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: action.payload,
            };
        case actionTypes.FETCH_TASKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionTypes.UPDATE_TASK_REQUEST:
            return { ...state, 
                loading: true,
                 error: null };

        case actionTypes.UPDATE_TASK_SUCCESS:
            return { ...state, 
                loading: false,
                 updatedTask: action.payload };

        case actionTypes.UPDATE_TASK_FAILURE:
            return { ...state,
                 loading: false, 
                 error: action.payload };

            case actionTypes.DELETE_TASK_REQUEST:
                return {
                  ...state,
                  loading: true,
                  error: null,
                };
              case actionTypes.DELETE_TASK_SUCCESS:
                const updatedTasks = state.tasks.filter(
                  (task) => task._id !== action.payload
                );
                return {
                  ...state,
                  loading: false,
                  tasks: updatedTasks,
                };
              case actionTypes.DELETE_TASK_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                };
        default:
            return state;
    }
};

export default reducer;

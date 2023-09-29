
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signupReducer from './reducer'; 
import loginReducer from './reducer'; 
import taskReducer from "./reducer"

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  tasks: taskReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

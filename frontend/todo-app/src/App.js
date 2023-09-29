import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CreateTask from './components/taskForm/CreateTask';
import DisplayTask from './components/taskList/DisplayTask';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn); 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <CreateTask /> : <Navigate to="/login" />} />
        <Route path="/task" element={isLoggedIn ? <DisplayTask /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../redux/action'; 

const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      dispatch(loginRequest());

      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;

        dispatch(loginSuccess(token));
        console.log('Login successful');
       navigate('/task')
      } else if (response.status === 401) {
        dispatch(loginFailure('Wrong credentials. Please check your username and password.'));
        console.log('Wrong credentials. Please check your username and password.');
      } else {
        dispatch(loginFailure('An error occurred while logging in.'));
        console.error('An error occurred while logging in. Status code:', response.status);
      }
    } catch (error) {
      dispatch(loginFailure(' error occurred while logging in.'));
      console.error(' error occurred while logging in:', error);
    }
    
  };

  return (
    <div className='row justify-content-center mt-5 px-3'>
      <div className='col-lg-6'>
        <h1 className='text-center'>Login Here</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="button" onClick={handleLogin}>
            Login
          </button>
          {authState.loading && <p>Loading...</p>}
          {authState.error && <p>{authState.error}</p>}
        </form>

        <div>
          Not a member? <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { signup } from '.././/../redux/action';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = ({ signup, loading, error, success }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      signup(formData);
    };
  
    return (
        <div className='row  justify-content-center mt-5 px-3'>
        <h1 className='text-center'>Sign Up Here</h1>
    <div className='col-lg-6'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">User Name</label>
            <input
              type="text" 
              name="username"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              required
              value={formData.username} 
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              required
              className="form-control"
              id="exampleInputPassword1"
              value={formData.password} 
              onChange={handleChange}
            />
          </div>
        
          <button type="submit" className="btn btn-primary">Submit</button>

          <div>
          Have already an account?  
            <Link to="/login">Login </Link>here
          </div>
        </form>
       
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {success && <p>Signup successful!</p>}
      </div>
      </div>
    );
  };
  
  // Map Redux state to component props
  const mapStateToProps = (state) => ({
    loading: state.signup.loading,
    error: state.signup.error,
    success: state.signup.success,
  });
  
  // Connect the component to the Redux store
  export default connect(mapStateToProps, { signup })(SignUp);
  
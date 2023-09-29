import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='container'>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleSidebar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isSidebarOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">

                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Create Task</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/task">Task</Link>
                            </li>
                        </>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

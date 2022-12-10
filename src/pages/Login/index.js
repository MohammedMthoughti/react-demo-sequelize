import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Login = () => {
    return (
        <div className="card">
            <h2>Welcome!</h2>
            <form className='auth-form'>
                <input name='email' placeholder='Email' />
                <input name='password' placeholder='Password' />
                <button type="submit">LOGIN</button>
            </form>
            <p>
                Don't have an account? <Link to='/register' className='orange-link'>register</Link>
            </p>
        </div>
    )
};

export default Login;
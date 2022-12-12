import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth'
import './index.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <h2>Welcome!</h2>
            <form className='auth-form' onSubmit={e => login(e, navigate)}>
                <input name='email' type={'email'} placeholder='Email' />
                <input name='password' type={'password'} placeholder='Password' />
                <button type="submit">LOGIN</button>
            </form>
            <p>
                Don't have an account? <Link to='/register' className='orange-link'>register</Link>
            </p>
        </div>
    )
};

export default Login;
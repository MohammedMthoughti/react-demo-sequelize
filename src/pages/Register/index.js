import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { register } from '../../services/auth';

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <h2>Register!</h2>
            <form className='auth-form' onSubmit={e => register(e, navigate)}>
                <input name='email' type={'text'} required placeholder='Email' />
                <input name='password' type={'password'} required placeholder='Password' />
                <input name='first_name' type='text' required placeholder='First Name' />
                <input name='last_name' type='text' required placeholder='Last Name' />
                <input name='age' type='number' min={0} required placeholder='Age' />
                <button type="submit">REGISTER</button>
            </form>
            <p>
                Already have an account? <Link to='/' className='orange-link'>login</Link>
            </p>
        </div>
    )
};

export default Register;
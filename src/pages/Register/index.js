import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Register = () => {
    return (
        <div className="card">
            <h2>Register!</h2>
            <form className='auth-form'>
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
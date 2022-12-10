import React from 'react';
import Sidebar from '../../components/Sidebar';
import './index.css';

const Profile = () => {
    return (
        <div className='flex'>
            <Sidebar />

            <div className='right-container profile-section'>
                <h2 className='black-text'>Profile Details</h2>
                <form>
                    <div>
                        <label>Email</label>
                        <input name='email' type={'email'} defaultValue={'minazuddin23@gmail.com'} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input name='password' type={'password'} defaultValue={'pass123'} />
                    </div>
                    <div>
                        <label>First Name</label>
                        <input name='first_name' type='text' defaultValue={'First Name'} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input name='last_name' type='text' defaultValue='Last Name' />
                    </div>
                    <div>
                        <label>Age</label>
                        <input name='age' type='number' min={0} defaultValue={26} />
                    </div>
                    <button type="submit">UPDATE</button>
                </form>
            </div>
        </div>
    )
};

export default Profile;
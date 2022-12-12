import React, { useEffect, useState } from 'react';
import Logout from '../../components/Logout';
import Sidebar from '../../components/Sidebar';
import { getUser, updateUser } from '../../services/user';
import './index.css';

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(setUser);
    }, []);

    return (
        <div className='flex'>
            <Sidebar />

            <div className='right-container profile-section'>
                <Logout />

                <h2 className='black-text'>Profile Details</h2>
                <form onSubmit={e => updateUser(e, setUser)}>
                    <div>
                        <label>Email</label>
                        <input name='email' type={'email'} defaultValue={user.email} />
                    </div>
                    <div>
                        <label>First Name</label>
                        <input name='first_name' type='text' defaultValue={user.first_name} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input name='last_name' type='text' defaultValue={user.last_name} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input name='age' type='number' min={0} defaultValue={user.age} />
                    </div>
                    <button type="submit">UPDATE</button>
                </form>
            </div>
        </div>
    )
};

export default Profile;
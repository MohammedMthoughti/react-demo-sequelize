import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './index.css';

const Vehicle = () => {
    const navigate = useNavigate();

    return (
        <div className='flex'>
            <Sidebar />

            <div className='right-container vehicle-section'>
                <h2 className='black-text'>Manage Vehicles</h2>
                <div>
                    <button onClick={() => navigate('/add-vehicle')}>Add Vehicle</button>
                    <table>
                        <thead>
                            <th>S No.</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Plate Number</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tesla</td>
                                <td>M1</td>
                                <td>TN01234</td>
                                <td>
                                    <button className='edit-btn' onClick={() => navigate('/edit-vehicle')}>Edit</button>
                                    <button className='del-btn'>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Maruti</td>
                                <td>M2</td>
                                <td>TN01235</td>
                                <td>
                                    <button className='edit-btn' onClick={() => navigate('/edit-vehicle')}>Edit</button>
                                    <button className='del-btn'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Vehicle;
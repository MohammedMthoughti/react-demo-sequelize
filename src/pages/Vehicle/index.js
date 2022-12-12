import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Logout from '../../components/Logout';
import './index.css';
import { deleteVehicle, getAllVehicles } from '../../services/vehicle';

const Vehicle = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState([]);
    const [isFetch, setFetch] = useState(false);

    useEffect(() => {
        getAllVehicles(setVehicles);
        setFetch(false);
    }, [isFetch]);

    return (
        <div className='flex'>
            <Sidebar />

            <div className='right-container'>
                <Logout />

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
                                {
                                    vehicles.length > 0
                                    &&
                                    vehicles.map((v, i) => (
                                        <tr key={v._id}>
                                            <td>{i + 1}</td>
                                            <td>{v.brand}</td>
                                            <td>{v.model}</td>
                                            <td>{v.plate_number}</td>
                                            <td>
                                                <button className='edit-btn' onClick={() => navigate(`/edit-vehicle/${v._id}`)}>Edit</button>
                                                <button className='del-btn' onClick={e => deleteVehicle(v._id, setFetch)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vehicle;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { getVehicle, editVehicle } from '../../services/vehicle';
import './index.css';

const EditVehicle = () => {
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getVehicle(id, setVehicle);
    }, []);

    return (
        <div className='flex'>
            <Sidebar />

            <div className='right-container edit-vehicle-section'>
                <h2 className='black-text'>Edit Vehicle</h2>
                <form onSubmit={e => editVehicle(e, id, navigate)}>
                    <div>
                        <label>Brand</label>
                        <input name='brand' type={'text'} defaultValue={vehicle.brand} />
                    </div>
                    <div>
                        <label>Model</label>
                        <input name='model' type={'text'} defaultValue={vehicle.model} />
                    </div>
                    <div>
                        <label>Plate Number</label>
                        <input name='plate_number' type={'text'} defaultValue={vehicle.plate_number} />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
};

export default EditVehicle;
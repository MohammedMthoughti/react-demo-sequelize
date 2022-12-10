import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './index.css';

const EditVehicle = () => {
    const navigate = useNavigate();

    return (
        <div className='flex'>
            <Sidebar />

            <div className='right-container edit-vehicle-section'>
                <h2 className='black-text'>Edit Vehicle</h2>
                <form>
                    <div>
                        <label>Brand</label>
                        <input name='brand' type={'text'} required />
                    </div>
                    <div>
                        <label>Model</label>
                        <input name='model' type={'text'} required />
                    </div>
                    <div>
                        <label>Plate Number</label>
                        <input name='plate_number' type={'text'} required />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
};

export default EditVehicle;
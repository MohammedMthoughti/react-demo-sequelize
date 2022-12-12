import { addVehicleApi, deleteVehicleApi, editVehicleApi, getAllVehiclesApi, getVehicleApi } from '../api/vehicle'

const addVehicle = async (e, navigate) => {
    try {
        e.preventDefault();
        
        const form = new FormData(e.target);
        
        const vehicle = {
            brand: form.get('brand'),
            model: form.get('model'),
            plate_number: form.get('plate_number')
        };

        const res = await addVehicleApi(vehicle);
        
        const { message, status } = res.data;
        
        if (!res.ok) {
            console.error(res.data);
            alert(message);
        }
        
        if (status) navigate('/vehicle');

    } catch (err) {
        console.error(err);
    }
};

const getVehicle = async (id, setVehicle) => {
    try {
        const res = await getVehicleApi(id);
        
        if (!res.ok) return console.error(res.data);
        
        const { status, data } = res.data;
        
        if (status) setVehicle(data);
    
    } catch (err) {
        console.error(err);
    }
};

const getAllVehicles = async (setVehicles) => {
    try {
        const res = await getAllVehiclesApi();
        
        if (!res.ok) console.error(res.data);

        setVehicles(res.data.data);

    } catch (err) {
        console.error(err);
    }
};

const editVehicle = async (e, id, navigate) => {
    try {
        e.preventDefault();
        
        const form = new FormData(e.target);
        
        const vehicle = {
            brand: form.get('brand'),
            model: form.get('model'),
            plate_number: form.get('plate_number')
        };

        const res = await editVehicleApi(id, vehicle);
        
        const { message, status } = res.data;
        
        if (!res.ok) {
            console.error(res.data);
            alert(message);
        }
        
        if (status) navigate('/vehicle');

    } catch (err) {
        console.error(err);
    }
};

const deleteVehicle = async (id, setFetch) => {
    try {
        const res = await deleteVehicleApi(id);
        
        const { message, status } = res.data;

        if (!res.ok) {
            console.error(res.data);
        }

        alert(message);

        if (!status) return;

        setFetch(true);

    } catch (err) {
        console.error(err);
    }
};

export {
    addVehicle,
    editVehicle,
    deleteVehicle,
    getVehicle,
    getAllVehicles,
}
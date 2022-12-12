import api from "./client";

const addVehicleApi = (data) => api.post('/vehicle', data);

const editVehicleApi = (id, data) => api.patch(`/vehicle/${id}`, data);

const deleteVehicleApi = (id) => api.delete(`/vehicle/${id}`);

const getAllVehiclesApi = () => api.get('/vehicle/getAll');

const getVehicleApi = (id) => api.get(`/vehicle/${id}`);

export {
    addVehicleApi,
    editVehicleApi,
    deleteVehicleApi,
    getAllVehiclesApi,
    getVehicleApi
}

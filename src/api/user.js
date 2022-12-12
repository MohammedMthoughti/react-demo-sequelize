import api from "./client";

const getUserApi = () => api.get('/user');

const updateUserApi = (data) => api.patch('/user', data);

export {
    getUserApi,
    updateUserApi
}
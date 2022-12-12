import api from "./client";

const registerApi = (data) => api.post('/user/signup', data);

const loginApi = (data) => api.post('/user/login', data);

export {
    registerApi,
    loginApi
}
import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3000'
});

api.addRequestTransform((request) => {
    request.headers['x-access-token'] = localStorage.getItem('react-demo-user-token');
});

export default api;
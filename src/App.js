import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Vehicle from './pages/Vehicle';
import AddVehicle from './pages/AddVehicle';
import EditVehicle from './pages/EditVehicle';
import useAuthCheck from './hooks/useAuthCheck';

const App = () => {

  return useRoutes([{
    path: '/',
    element: [useAuthCheck(), <Login />]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/profile',
    element: [useAuthCheck(), <Profile />]
  },
  {
    path: '/vehicle',
    element: [useAuthCheck(), <Vehicle />]
  },
  {
    path: '/add-vehicle',
    element: [useAuthCheck(), <AddVehicle />]
  },
  {
    path: '/edit-vehicle/:id',
    element: [useAuthCheck(), <EditVehicle />]
  }]);
};

export default App;

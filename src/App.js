import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Vehicle from './pages/Vehicle';
import AddVehicle from './pages/AddVehicle';
import EditVehicle from './pages/EditVehicle';

const App = () => {

  return useRoutes([{
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/vehicle',
    element: <Vehicle />
  },
  {
    path: '/add-vehicle',
    element: <AddVehicle />
  },
  {
    path: '/edit-vehicle',
    element: <EditVehicle />
  }]);
};

export default App;

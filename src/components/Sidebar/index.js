import React from "react";
import './index.css';
import { select } from './helper';
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <div className="container">
            <h2 className="logo-heading">Vehicle Management</h2>

            <div className="list">
                <NavLink to={'/profile'} className={pathname.startsWith('/profile') ? 'item selected' : 'item'}>Profile</NavLink>
                <NavLink to={'/vehicle'} className={pathname.includes('vehicle') ? 'item selected' : 'item'}>Manage Vehicle</NavLink>
            </div>
        </div>
    )
};

export default Sidebar;
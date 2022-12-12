import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('react-demo-user-token');
        navigate('/');
    };

    return (
        <div className="logout">
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout;


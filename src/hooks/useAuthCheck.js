import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useAuthCheck = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!localStorage.getItem('react-demo-user-token')) {
            navigate('/');
        } else if (pathname === '/') {
            navigate('/profile');
        } 
    }, []);
};

export default useAuthCheck;
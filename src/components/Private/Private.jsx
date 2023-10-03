import React, { useContext } from 'react';
import { Authinfo } from '../../provider/Authcontext/Authcontext';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(Authinfo)
    if (loading) {
        return <>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </>
    }
   
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;
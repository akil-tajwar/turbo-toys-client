import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>
    }
    if (user?.email) {
        return children;
    }
    else {
        return <Navigate to='/login' replace></Navigate>
    }
};

export default PrivateRoute;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = () => {
    const navigate = useNavigate();
    useEffect(() => !localStorage.getItem('token') && navigate('/login'))
};

export default RequireAuth;
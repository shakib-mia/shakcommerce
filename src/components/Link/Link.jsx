// import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Link = ({ children, to, className }) => {
    const navigate = useNavigate();

    const handleRouteChange = e => {
        e.preventDefault();
        navigate(to)
    }

    return (
        <a href={to} onClick={handleRouteChange} className={className}>
            {children}
        </a>
    );
};

export default Link;

Link.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    className: PropTypes.string
};
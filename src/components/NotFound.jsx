import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-text">The page you are looking for does not exist.</p>
            <Link to="/" className="home-link-btn">
                Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) {
        return (
            <div className="not-logged-in">
                <h2>Please Login</h2>
                <p>You need to be logged in to view your profile.</p>
                <Link to="/login" className="login-link-btn">Go to Login</Link>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <h2 className="profile-title">User Profile</h2>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Joined:</strong> {user.joined}</p>
            </div>
            <button
                onClick={handleLogout}
                className="logout-btn"
            >
                Logout
            </button>
        </div>
    );
}

export default Profile;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const { firstName, lastName, email } = location.state || {};
{/* Basic Profile Page */}
  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-details">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Profile;

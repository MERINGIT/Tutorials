// UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ user }) => {
  const { _id, picture, name, email, phone, address, company } = user;

  return (
    <Link to={`/profiles/${_id}`} className="user-card">
      <img src={picture} alt={`${name}`} />
      <div className="user-card-details">
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Company: {company}</p>
      </div>
    </Link>
  );
};

export default UserCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProfileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-detail-container">
      <div className="profile-detail-content">
        <img src={user.picture} alt={user.name} className="profile-detail-image" />
        <h1>{user.name}</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>About:</strong> {user.about}</p>
        <p><strong>Balance:</strong> {user.balance}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Eye Color:</strong> {user.eyeColor}</p>
        <p><strong>Favorite Fruit:</strong> {user.favoriteFruit}</p>
        <div className="friends-list">
          <strong>Friends:</strong>
          <ul>
            {user.friends.map((friend) => (
              <li key={friend.id}>{friend.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard'; // Import UserCard component
import './ProfileList.css';

const ProfileList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="profile-list-container">
      <input
        type="text"
        placeholder="Search by firstname or lastname"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="profile-list">
        {filteredUsers.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;

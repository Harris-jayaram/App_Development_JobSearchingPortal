import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch users from the backend
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>There was an error loading users.</p>;

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;

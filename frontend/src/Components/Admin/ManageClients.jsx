import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './ManageClients.css';

const ManageClients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: '', contact: '', logo: '' });

  useEffect(() => {
    // Fetch clients from backend
    axios.get('http://localhost:8080/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  const addClient = () => {
    if (newClient.name && newClient.contact && newClient.logo) {
      axios.post('http://localhost:8080/api/clients', newClient)
        .then(response => {
          setClients([...clients, response.data]);
          setNewClient({ name: '', contact: '', logo: '' });
        })
        .catch(error => console.error('Error adding client:', error));
    }
  };

  const removeClient = (id) => {
    axios.delete(`http://localhost:8080/api/clients/${id}`)
      .then(() => {
        setClients(clients.filter(client => client.id !== id));
      })
      .catch(error => console.error('Error removing client:', error));
  };

  return (
    <div className="manage-clients-container">
      <Sidebar />
      <div className="manage-clients-content">
        <h1>Manage Clients</h1>

        <div className="add-client-form">
          <input 
            type="text" 
            placeholder="Company Name" 
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          />
          <input 
            type="email" 
            placeholder="Contact Email" 
            value={newClient.contact}
            onChange={(e) => setNewClient({ ...newClient, contact: e.target.value })}
          />
          <input 
            type="text" 
            placeholder="Logo URL" 
            value={newClient.logo}
            onChange={(e) => setNewClient({ ...newClient, logo: e.target.value })}
          />
          <button onClick={addClient}>Add Client</button>
        </div>

        <div className="clients-list">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
              <div className="client-info">
                <h3>{client.name}</h3>
                <p>Contact: {client.contact}</p>
              </div>
              <button onClick={() => removeClient(client.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageClients;

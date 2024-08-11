import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../Assest/css/feedback.css";
import Sidebar from './Sidebar';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch all feedback from the backend API
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contact');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const deleteContactData = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/contact/${id}`);
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
      console.log('Feedback deleted successfully.');
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div className="feedback-wrapper">
        <Sidebar />
      <h1>Feedback</h1>
      {feedbacks.length > 0 ? (
        feedbacks.map(feedback => (
          <div key={feedback.id} className="user-feedback">
            <h3>User Details</h3>
            <p><strong>Name:</strong> {feedback.name}</p>
            <p><strong>Contact:</strong> {feedback.contact}</p>
            <p><strong>Message:</strong> {feedback.message}</p>
            <p><strong>Location:</strong> {feedback.location}</p>
            <button onClick={() => deleteContactData(feedback.id)} className="delete-button">
              Delete Feedback
            </button>
          </div>
        ))
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default Feedback;

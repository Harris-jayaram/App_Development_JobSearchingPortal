import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClipboard, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../../Assest/css/Recuriter.css"; // Import the CSS file

const Recruiter = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handlePostJobClick = () => {
    navigate('/login'); // Navigate to PostJob page
  };
  const handleHackathonClick = () => {
    navigate('/hackathon'); // Navigate to PostJob page
  };

  return (
    <div className="recruiter-container">
      <h2 className="recruiter-title">Are You an Employer?</h2>
      <div className="buttons-container">
        <div className="button search-button">
          <FontAwesomeIcon icon={faSearch} className="button-icon" />
          <span>Search<br />Your Hire</span>
        </div>
        <div className="button post-button" onClick={handlePostJobClick}>
          <FontAwesomeIcon icon={faClipboard} className="button-icon" />
          <span>Post<br />a Job</span>
        </div>
        <div className="button hackathon-button">
          <FontAwesomeIcon icon={faLaptopCode} onClick={handleHackathonClick} className="button-icon" />
          <span>Conduct<br />Hackathon</span>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;

import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './jobcard-course.css';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/buy-now');
  };

  if (!course) {
    return null; // Or some fallback UI
  }

  return (
    <div className="course-card">
      <div className="course-info">
        <img src={course.image} alt={course.title} className="course-image" />
        <h3>{course.title}</h3>
        <p>{course.provider}</p>
        <p>Duration: {course.duration} | Mode: {course.mode}</p>
        <p>₹{course.price}</p>
        <div className="course-rating">
          <span>{course.rating}</span>
        </div>
      </div>
      <div className="course-actions">
        <button className="explore-btn">Explore</button>
        <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default CourseCard;

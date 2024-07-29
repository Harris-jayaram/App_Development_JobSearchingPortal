import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseCard from './CourseCard';
import BuyNow from './BuyNow';
import '../../Assest/css/jobcard-course.css'; // Import the CSS file
import java from "../../Assest/Img/java1.jpg";
import python from "../../Assest/Img/python.png";
import nodejs from "../../Assest/Img/nodejs.png";
const courses = [
  {
    image: java,
    title: 'Backend Developer in Java',
    provider: 'TestPrepTraining',
    duration: '51 Hours',
    mode: 'Online',
    price: 12999,
    rating: 4.5
  },
  {
    image: python,
    title: 'Backend Developer in Python',
    provider: 'TestPrepTraining',
    duration: '20 Hours',
    mode: 'Online',
    price: 12999,
    rating: 4.5
  },
  {
    image: nodejs,
    title: 'Backend Developer in Node.js',
    provider: 'TestPrepTraining',
    duration: '41 Hours',
    mode: 'Online',
    price: 12999,
    rating: 4.5
  }
];

const JobCard = () => {
  return (
    
      <Routes>
        <Route path="/buy-now" element={<BuyNow />} />
        <Route 
          path="/" 
          element={
            <div>
              <h2>Popular Courses</h2>
              <div className="courses-container">
                {courses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </div>
          } 
        />
      </Routes>
    
  );
};

export default JobCard;

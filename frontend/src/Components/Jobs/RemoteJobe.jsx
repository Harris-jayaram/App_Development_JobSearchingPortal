import React, { useState } from 'react';
import JobCard from './JobCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../../Assest/css/RemoteJobs.css";
const jobData = [
  {
    title: 'Data Entry Operator, Work From Home Part Time',
    company: 'Matrixx India',
    location: 'Bangalore',
    moreLocations: 9,
    experience: '0 to 4 Yrs',
    positions: 20,
    daysAgo: 0,
    applyLink: 'https://example.com/apply1',
  },
  {
    title: 'Data Entry Clerk',
    company: 'V-tech data outsourcing',
    location: 'Bangalore',
    moreLocations: 9,
    experience: '0 to 1 Yr',
    positions: 36,
    daysAgo: 0,
    applyLink: 'https://example.com/apply2',
  },
  {
    title: 'Data Entry Clerk',
    company: 'V-tech data outsourcing',
    location: 'Anantnag',
    moreLocations: 9,
    experience: '0 to 1 Yr',
    positions: 80,
    daysAgo: 1,
    applyLink: 'https://example.com/apply3',
  },
  {
    title: 'Data Entry Operator Computer Operator Work From Home',
    company: 'Learning planner hiring for data en...',
    location: 'Jaipur',
    moreLocations: 8,
    experience: '0 to 4 Yrs',
    positions: 32,
    daysAgo: 2,
    applyLink: 'https://example.com/apply4',
  },
  {
    title: 'Customer Support Specialist',
    company: 'Tech Solutions',
    location: 'Remote',
    moreLocations: 0,
    experience: '1 to 3 Yrs',
    positions: 5,
    daysAgo: 3,
    applyLink: 'https://example.com/apply5',
  },
  {
    title: 'Virtual Assistant',
    company: 'Global Assistants',
    location: 'Remote',
    moreLocations: 0,
    experience: '2 to 5 Yrs',
    positions: 10,
    daysAgo: 4,
    applyLink: 'https://example.com/apply6',
  },
  {
    title: 'Remote Customer Service Representative',
    company: 'CustomerCare Inc.',
    location: 'Remote',
    moreLocations: 0,
    experience: '0 to 2 Yrs',
    positions: 15,
    daysAgo: 2,
    applyLink: 'https://example.com/apply7',
  },
  {
    title: 'Online Tutor',
    company: 'EduTech',
    location: 'Remote',
    moreLocations: 0,
    experience: '1 to 4 Yrs',
    positions: 8,
    daysAgo: 1,
    applyLink: 'https://example.com/apply8',
  },
  {
    title: 'Remote Data Entry Specialist',
    company: 'Data Solutions',
    location: 'Remote',
    moreLocations: 0,
    experience: '1 to 3 Yrs',
    positions: 25,
    daysAgo: 5,
    applyLink: 'https://example.com/apply9',
  },
  {
    title: 'Administrative Assistant',
    company: 'Admin Experts',
    location: 'Remote',
    moreLocations: 0,
    experience: '2 to 4 Yrs',
    positions: 7,
    daysAgo: 3,
    applyLink: 'https://example.com/apply10',
  },
  {
    title: 'Remote Sales Representative',
    company: 'SalesPro',
    location: 'Remote',
    moreLocations: 0,
    experience: '1 to 5 Yrs',
    positions: 12,
    daysAgo: 1,
    applyLink: 'https://example.com/apply11',
  },
  {
    title: 'Content Moderator',
    company: 'Social Media Co.',
    location: 'Remote',
    moreLocations: 0,
    experience: '0 to 2 Yrs',
    positions: 10,
    daysAgo: 2,
    applyLink: 'https://example.com/apply12',
  },
  {
    title: 'Technical Support Specialist',
    company: 'TechSupport Inc.',
    location: 'Remote',
    moreLocations: 0,
    experience: '1 to 3 Yrs',
    positions: 8,
    daysAgo: 4,
    applyLink: 'https://example.com/apply13',
  }
];

const RemoteJobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - itemsPerPage : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage < jobData.length ? prevIndex + itemsPerPage : prevIndex));
  };

  const currentJobs = jobData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="remote-jobs">
      <h1>Remote Jobs</h1>
      <div className="job-cards-container">
        <button className="nav-button" onClick={handlePrevClick}><FaChevronLeft /></button>
        {currentJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        <button className="nav-button" onClick={handleNextClick}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default RemoteJobs;
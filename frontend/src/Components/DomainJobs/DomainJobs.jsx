import React, { useState } from 'react';
import JobCard from './JobCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../../Assest/css/DomainJobs.css";

const jobData = [
  { title: 'Software Engineer', company: 'Tech Corp', domain: 'IT', location: 'Remote', experience: '2 to 5 Yrs', positions: 3, daysAgo: 2, applyLink: 'https://example.com/apply1' },
  { title: 'Sales Manager', company: 'SalesPro', domain: 'Sales', location: 'New York', experience: '3 to 6 Yrs', positions: 2, daysAgo: 3, applyLink: 'https://example.com/apply2' },
  { title: 'Financial Analyst', company: 'Finance Solutions', domain: 'Finance', location: 'San Francisco', experience: '1 to 3 Yrs', positions: 5, daysAgo: 1, applyLink: 'https://example.com/apply3' },
  { title: 'Marketing Specialist', company: 'Marketing Inc.', domain: 'Marketing', location: 'Remote', experience: '2 to 4 Yrs', positions: 4, daysAgo: 4, applyLink: 'https://example.com/apply4' },
  { title: 'HR Coordinator', company: 'HR Solutions', domain: 'HR', location: 'Chicago', experience: '1 to 3 Yrs', positions: 1, daysAgo: 5, applyLink: 'https://example.com/apply5' },
  { title: 'Call Center Agent', company: 'Call Center Co.', domain: 'Telesales', location: 'Remote', experience: '0 to 2 Yrs', positions: 10, daysAgo: 0, applyLink: 'https://example.com/apply6' },
  { title: 'Data Scientist', company: 'Data Insights', domain: 'IT', location: 'Remote', experience: '3 to 5 Yrs', positions: 2, daysAgo: 3, applyLink: 'https://example.com/apply7' },
  { title: 'Regional Sales Executive', company: 'Sales Solutions', domain: 'Sales', location: 'Los Angeles', experience: '5 to 7 Yrs', positions: 1, daysAgo: 1, applyLink: 'https://example.com/apply8' },
  { title: 'Investment Banker', company: 'Banking Corp', domain: 'Finance', location: 'New York', experience: '4 to 6 Yrs', positions: 3, daysAgo: 2, applyLink: 'https://example.com/apply9' },
  { title: 'Content Marketing Manager', company: 'Marketing Experts', domain: 'Marketing', location: 'Remote', experience: '2 to 5 Yrs', positions: 2, daysAgo: 4, applyLink: 'https://example.com/apply10' },
  { title: 'Talent Acquisition Specialist', company: 'HR Partners', domain: 'HR', location: 'Boston', experience: '1 to 2 Yrs', positions: 4, daysAgo: 3, applyLink: 'https://example.com/apply11' },
  { title: 'Telemarketing Executive', company: 'Telecom Solutions', domain: 'Telesales', location: 'Remote', experience: '1 to 3 Yrs', positions: 5, daysAgo: 1, applyLink: 'https://example.com/apply12' },
  { title: 'Full Stack Developer', company: 'Innovative Tech', domain: 'IT', location: 'San Francisco', experience: '2 to 4 Yrs', positions: 3, daysAgo: 5, applyLink: 'https://example.com/apply13' },
  { title: 'Product Marketing Manager', company: 'Market Leaders', domain: 'Marketing', location: 'Remote', experience: '3 to 5 Yrs', positions: 2, daysAgo: 2, applyLink: 'https://example.com/apply14' },
];

const domains = ['IT', 'Sales', 'Finance', 'Marketing', 'Telesales', 'HR', 'Others'];

const DomainJobs = () => {
  const [selectedDomain, setSelectedDomain] = useState('IT');
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
    setCurrentIndex(0);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - itemsPerPage : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage < filteredJobs.length ? prevIndex + itemsPerPage : prevIndex));
  };

  const filteredJobs = jobData.filter(job => job.domain === selectedDomain);
  const currentJobs = filteredJobs.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="domain-jobs">
      <h1>Domain Jobs</h1>
      <div className="domain-list">
        {domains.map((domain, index) => (
          <button 
            key={index} 
            className={`domain-button ${domain === selectedDomain ? 'active' : ''}`} 
            onClick={() => handleDomainClick(domain)}
          >
            {domain}
          </button>
        ))}
      </div>
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

export default DomainJobs;

import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "../../Assest/css/CustomerFAQ.css";

const faqData = [
    {
      question: 'How do I search for jobs?',
      answer: 'You can search for jobs using the search bar or browse jobs by categories and filters available on the portal.',
    },
    {
      question: 'How can I apply for a job?',
      answer: 'Once you find a job that matches your skills, click on the apply button, fill out the required information, and submit your application.',
    },
    {
      question: 'What should I include in my resume?',
      answer: 'Your resume should include your contact information, work experience, education, skills, and any certifications relevant to the job you are applying for.',
    },
    {
      question: 'How do I track my application status?',
      answer: 'You can track your application status through the "My Applications" section of your dashboard. You’ll receive notifications for any status changes.',
    },
    {
      question: 'Can I update my profile after applying for jobs?',
      answer: 'Yes, you can update your profile information at any time. However, the updates will not affect any applications already submitted.',
    },
    {
      question: 'How do I prepare for interviews?',
      answer: 'Research the company, understand the job role, and prepare to discuss your experience and skills. Practice common interview questions and be ready to provide examples of your work.',
    },
    {
      question: 'Are there remote job opportunities?',
      answer: 'Yes, our platform offers remote job opportunities. You can filter your search results to display only remote jobs.',
    },
    {
      question: 'How can I improve my chances of getting hired?',
      answer: 'Tailor your resume to match the job description, write a compelling cover letter, and ensure your profile is complete and up-to-date.',
    },
  ];
  
  const CommunityFAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeIndex, setActiveIndex] = useState(null);
  
    const filteredFAQ = faqData.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="faq-container">
        <h2 className="faq-title">Community FAQ</h2>
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="faq-search-icon" />
        </div>
        <div className="faq-content">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  {item.question}
                  {activeIndex === index ? (
                    <FaChevronUp className="faq-icon" />
                  ) : (
                    <FaChevronDown className="faq-icon" />
                  )}
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))
          ) : (
            <div className="faq-no-results">No results found.</div>
          )}
        </div>
      </div>
    );
  };
  
  export default CommunityFAQ;
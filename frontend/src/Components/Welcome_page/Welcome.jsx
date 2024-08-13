import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Assest/css/Welcome.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { MdWork, MdWorkOutline } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import Sidebar from '../sidebar/Sidebar';
import RemoteJobs from '../Jobs/RemoteJobe';
import TopHiringCompanies from '../TopHiringCompanies/TopHiringCompanies';
import WalkinJobs from '../WalkInJobs/WalkinJobs';
import DomainJobs from '../DomainJobs/DomainJobs';
import Recuriter from '../Recuriter/Recuriter';
import CourseCard from '../Course/CourseCard';
import JobCard from '../Course/JobCard';
import Footer from '../Footer/Footer';
import Chatbot from './Chatbot';
// import CustomerSection from './CustomerSection';
const districts = [
  'Coimbatore',
  'Chennai',
  'Salem',
  'Nammakal',
  'Trichy',
  // Add more districts as needed
];

const Welcome = () => {
  const [timer, setTimer] = useState(10);
  const [intervalId, setIntervalId] = useState(null);

  const handleLogout = () => {
    const id = setInterval(() => {
        setTimer(prevTimer => {
            if (prevTimer <= 1) {
                clearInterval(id);
                setTimer(0);

                // Clear the token from session storage
                sessionStorage.removeItem('token');

                // Optionally, redirect the user to the login page or homepage
                window.location.href = '/login';

            } else {
                return prevTimer - 1;
            }
        });
    }, 1000);



    setIntervalId(id);

    toast.info(
      <div>
        <p>Are you sure you want to logout?</p>
        <p>Time remaining: {timer} seconds</p>
        <div className="toast-button-container">
          <button
            onClick={() => {
              clearInterval(id);
              toast.success('Logged out successfully');
              setTimeout(() => {
                window.location.href = '/login';
              }, 1000);
            }}
            className="toast-button toast-button-yes"
          >
            Yes
          </button>
          <button
            onClick={() => {
              clearInterval(id);
              toast.error('Logout canceled');
            }}
            className="toast-button toast-button-no"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        onClose: () => {
          clearInterval(intervalId);
        },
      }
    );
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="welcome-page">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo"><span className='logoo'>Shigo</span><span className='logoo1'>To</span></div>
        <nav className="nav">
          {/* <a href="/home">Home</a> */}
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/contactus">Contact Us</a>
          <a href="/communityfaq">CommunityFAQ</a>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <div className="main-content">
        <div className="text-content">
          <h1>Craft Your Future Success...</h1>
          <p>Explore Career Paths, Network with Visionaries</p>
        </div>

        <div className="search-bar">
          <div className="search-input-group">
            <MdWork className="search-icon" />
            <select className="search-select">
              <option value="">Job Role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              {/* Add more roles as needed */}
            </select>
          </div>

          <div className="search-input-group">
            <MdWorkOutline className="search-icon" />
            <select className="search-select">
              <option value="">Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="internship">Internship</option>
              {/* Add more types as needed */}
            </select>
          </div>

          <div className="search-input-group">
            <CiLocationOn className="search-icon" />
            <select className="search-select">
              <option value="">Location</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div className="search-input-group">
            <BsFillCalendarCheckFill className="search-icon" />
            <select className="search-select">
              <option value="">Experience Level</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-Level</option>
              <option value="senior">Senior</option>
              {/* Add more levels as needed */}
            </select>
          </div>

          <button className="search-button">
            <AiOutlineSearch className="search-button-icon" />
            Search
          </button>
        </div>
        <div>
          <TopHiringCompanies />
        </div>

        <div className="content">
          {/* <Sidebar /> */}
          <RemoteJobs />
        </div>
        <div className='context1'>
              <WalkinJobs />
        </div>
        <div className='context2'>
              <DomainJobs />
        </div>
        <div className='context5'>
          <Recuriter />
        </div>
        <div>
          <JobCard />
        </div>
        
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div>
        <Chatbot />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Welcome;

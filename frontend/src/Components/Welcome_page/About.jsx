import React, { useState } from 'react';
import '../../Assest/css/AboutUs.css'; // Ensure the path is correct for your project structure
import Footer from '../Footer/Footer';
import harris from "../../Assest/Img/harris.png";
const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Harris Jayaram",
      position: "CEO & Founder",
      github: "https://github.com/johndoe",
      instagram: "../../Assest/Img/harris.png",
      rating: 4.5,
      image: require('../../Assest/Img/harris.png'),
    },
    {
      name: "Hari hara maharajan",
      position: "Chief Technology Officer",
      github: "https://github.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      rating: 4.7,
      image: require('../../Assest/Img/hhmr.jpg'),
    },
    {
      name: "Selvadran",
      position: "Lead Developer",
      github: "https://github.com/michaelbrown",
      instagram: "https://instagram.com/michaelbrown",
      rating: 4.6,
      image: require('../../Assest/Img/selva.png'),
    },
    {
      name: "Jayasudhan",
      position: "Head of Marketing",
      github: "https://github.com/emilywhite",
      instagram: "https://instagram.com/emilywhite",
      rating: 4.8,
      image: require('../../Assest/Img/sudhan.jpg'),
    }
  ];

  const handleMemberClick = (index) => {
    setSelectedMember(index === selectedMember ? null : index);
  };

  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your gateway to the perfect career.</p>
      </header>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At ShigoTo, we are dedicated to connecting talented job seekers with
          the best employers in the industry. Our mission is to simplify the
          job search process and empower candidates with the tools and
          resources they need to find their dream job.
        </p>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every job seeker can find the right
          opportunity effortlessly, and every company can find the perfect
          candidate to grow their business. Our vision is to be the leading
          job portal that bridges the gap between talent and opportunity.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-member ${selectedMember === index ? 'selected' : ''}`}
              onClick={() => handleMemberClick(index)}
            >
              <img src={member.image} alt={`${member.name}`} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              {selectedMember === index && (
                <div className="member-details">
                  <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`star ${i < Math.floor(member.rating) ? 'filled' : ''}`}>★</span>
                    ))}
                    <span className="rating-value">{member.rating.toFixed(1)}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="about-testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "ShigoTo helped me find my dream job in no time! The platform is
              user-friendly and offers great tools to optimize my resume."
            </p>
            <h3>- Sarah Johnson</h3>
          </div>
          <div className="testimonial">
            <p>
              "The real-time tracking of job applications is fantastic. I
              always knew where I stood in the hiring process."
            </p>
            <h3>- James Lee</h3>
          </div>
          <div className="testimonial">
            <p>
              "Great platform with excellent job recommendations. I highly
              recommend it to anyone looking for a new opportunity."
            </p>
            <h3>- Anna Williams</h3>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

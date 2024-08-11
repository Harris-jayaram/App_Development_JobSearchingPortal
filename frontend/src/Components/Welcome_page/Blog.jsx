import React, { useState, useEffect } from 'react';
import "../../Assest/css/Blog.css";
import logo from "../../Assest/Img/Shigoto1.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// BlogPost Component
const BlogPost = ({ title, date, author, content }) => (
  <div className="blog-post">
    <h3>{title}</h3>
    <div className="post-details">
      <span>{date}</span> | <span>{author}</span>
    </div>
    <p>{content}</p>
  </div>
);

// BlogSearch Component
const BlogSearch = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="filtered-posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              author={post.author}
              content={post.content}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

// ImageCard Component
const ImageCard = ({ imageUrl, title, content }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    alert(`You clicked on: ${title}`);
  };

  return (
    <div
      className={`img-card ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={imageUrl} alt={title} />
      <div className="img-card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

// Sample Posts Data
const samplePosts = [
  { id: 1, title: "How to Ace Your Next Interview", date: "August 7, 2024", author: "Jane Doe", content: "Learn key strategies to impress interviewers and land your dream job." },
  { id: 2, title: "Top 5 In-Demand Jobs for 2024", date: "August 6, 2024", author: "John Smith", content: "Discover the most sought-after skills and roles in the current job market." },
  { id: 3, title: "Remote Work Trends in 2024", date: "August 5, 2024", author: "Emily Johnson", content: "Explore how remote work is evolving and what it means for professionals." },
  { id: 4, title: "Networking Tips for Tech Professionals", date: "August 4, 2024", author: "Michael Lee", content: "Effective networking strategies to advance your tech career in 2024." },
  { id: 5, title: "Resume Writing Guide 2024", date: "August 3, 2024", author: "Samantha Brown", content: "Update your resume with the latest trends and tips for 2024." },
  { id: 6, title: "Tech Salaries in 2024: What to Expect", date: "August 2, 2024", author: "Anna White", content: "Get insights into the latest salary trends across the tech industry." },
  { id: 7, title: "Upskilling for the AI Era", date: "August 1, 2024", author: "David Clark", content: "How to stay competitive by learning new skills in the age of AI." },
];

// App Component
const App = () => {
  useEffect(() => {
    const notify = () => {
      toast.info(
        <div>
          <p>Would you like to allow notifications?</p>
          <button onClick={() => handleAllow()}>Yes</button>
          <button onClick={() => handleDeny()}>No</button>
        </div>,
        {
          position: "top-center",
          autoClose: false,
          closeOnClick: false,
          closeButton: false,
          draggable: false,
        }
      );
    };

    const handleAllow = () => {
      toast.dismiss();
      toast.success('Notifications allowed!', { position: "top-center" });
    };

    const handleDeny = () => {
      toast.dismiss();
      toast.error('Notifications denied!', { position: "top-center" });
    };

    setTimeout(notify, 2000);
  }, []);

  return (
    <div className="blog-page">
      <ToastContainer />

      <header className="blog-header">
        <h1>Job Search News</h1>
        <nav className="blog-nav">
          <a href="#featured">Featured</a>
          <a href="#latest">Latest News</a>
          <a href="#trends">Trends</a>
          <a href="#tips">Career Tips</a>
        </nav>
      </header>

      <main className="blog-main">
        <aside className="news-sidebar">
          <h2>Latest News</h2>
          <BlogSearch posts={samplePosts} />
        </aside>

        <section className="content-section">
          <section id="featured" className="featured-news">
            <h2>Featured News</h2>
            <div className="featured-grid">
              <div className="featured-post">
                <h3>Job Market Outlook for 2024</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac urna nec eros tincidunt dapibus.</p>
              </div>
              <div className="featured-post">
                <h3>Tech Giants Hiring Spree in 2024</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac urna nec eros tincidunt dapibus.</p>
              </div>
              <div className="featured-post">
                <h3>AI Revolution in Recruitment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac urna nec eros tincidunt dapibus.</p>
              </div>
              <div className="featured-post">
                <h3>New Skills in Demand for 2024</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac urna nec eros tincidunt dapibus.</p>
              </div>
            </div>
          </section>

          <section id="trends" className="trends-section">
            <h2>Industry Trends</h2>
            <div className="trend-post">
              <h3>Remote Work: The New Normal</h3>
              <p>Remote work continues to be a major trend in 2024, with more companies adopting flexible work policies.</p>
            </div>
            <div className="trend-post">
              <h3>Green Jobs on the Rise</h3>
              <p>Sustainability is driving demand for green jobs across various industries, creating new opportunities for job seekers.</p>
            </div>
          </section>

          <section id="tips" className="tips-section">
            <h2>Career Tips</h2>
            <div className="tip-post">
              <h3>Enhancing Your Resume for 2024</h3>
              <p>Learn the latest strategies for making your resume stand out to employers.</p>
            </div>
            <div className="tip-post">
              <h3>Mastering Virtual Interviews</h3>
              <p>Get expert advice on how to excel in virtual interviews and make a great impression.</p>
            </div>

            {/* New Image Card Section */}
            <div className="img-card-section">
              <ImageCard 
                imageUrl={logo} 
                title="Career Growth Strategies" 
                content="Discover the best strategies to boost your career growth in 2024." 
              />
              <ImageCard 
                imageUrl={logo} 
                title="Resume Optimization" 
                content="Learn how to optimize your resume for the latest trends." 
              />
              <ImageCard 
                imageUrl={logo} 
                title="Interview Preparation" 
                content="Get tips on how to prepare for interviews in 2024." 
              />
            </div>
          </section>
        </section>
      </main>

      <footer className="blog-footer">
        
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className="footer-copyright">
          &copy; 2024 Shigoto. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;

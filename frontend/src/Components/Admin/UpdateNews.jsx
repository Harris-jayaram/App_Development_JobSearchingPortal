import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './UpdateNews.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize react-toastify
const notify = (type, message) => {
  switch(type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
      break;
  }
};

const UpdateNews = () => {
  const [news, setNews] = useState([]);
  const [newsDetails, setNewsDetails] = useState({
    title: '',
    content: '',
    date: '',
    author: '',
    category: '',
    tags: '',
    image: '',
    source: ''
  });
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    // Fetch news from backend and update local storage
    axios.get('http://localhost:8080/api/news')
      .then(response => {
        const newsFromBackend = response.data;
        setNews(newsFromBackend);
        localStorage.setItem('news', JSON.stringify(newsFromBackend));
      })
      .catch(() => notify('error', 'Failed to fetch news.'));
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsDetails({ ...newsDetails, [name]: value });
  };

  // Add news
  const addNews = () => {
    axios.post('http://localhost:8080/api/news', newsDetails)
      .then(response => {
        const newNews = response.data;
        const updatedNews = [...news, newNews];
        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));
        setNewsDetails({
          title: '',
          content: '',
          date: '',
          author: '',
          category: '',
          tags: '',
          image: '',
          source: ''
        });
        notify('success', 'News added successfully!');
      })
      .catch(() => notify('error', 'Failed to add news.'));
  };

  // Delete news
  const deleteNews = (id) => {
    axios.delete(`http://localhost:8080/api/news/${id}`)
      .then(() => {
        const updatedNews = news.filter(item => item.id !== id);
        setNews(updatedNews);
        localStorage.setItem('news', JSON.stringify(updatedNews));
        notify('success', 'News deleted successfully!');
      })
      .catch(() => notify('error', 'Failed to delete news.'));
  };

  // Open popup with news details
  const openPopup = (item) => {
    setSelectedNews(item);
  };

  // Close popup
  const closePopup = () => {
    setSelectedNews(null);
  };

  // Navigate to source URL
  const navigateToSource = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="update-news-container">
      <Sidebar />
      <div className="update-news-content">
        <h1>Update News</h1>
        <div className="news-form">
          <input
            type="text"
            name="title"
            placeholder="News Title"
            value={newsDetails.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="News Content"
            value={newsDetails.content}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={newsDetails.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newsDetails.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newsDetails.category}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={newsDetails.tags}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newsDetails.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="source"
            placeholder="Source URL"
            value={newsDetails.source}
            onChange={handleInputChange}
          />
          <button onClick={addNews}>Add News</button>
        </div>
        <div className="news-list">
          <h2>News List</h2>
          {news.length === 0 ? (
            <p>No news available. Add some news to display here.</p>
          ) : (
            news.map((item) => (
              <div key={item.id} className="news-item-card">
                {item.image && <img src={item.image} alt="News" className="news-logo" />}
                <div className="news-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.content.slice(0, 50)}...</p>
                  <button onClick={() => openPopup(item)}>View Details</button>
                  <button onClick={() => deleteNews(item.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
        {selectedNews && (
          <div className="news-popup">
            <div className="news-popup-content">
              <span className="close-popup" onClick={closePopup}>&times;</span>
              <h2>{selectedNews.title}</h2>
              <p><strong>Author:</strong> {selectedNews.author}</p>
              <p><strong>Date:</strong> {selectedNews.date}</p>
              <p><strong>Category:</strong> {selectedNews.category}</p>
              <p><strong>Tags:</strong> {selectedNews.tags}</p>
              <p>{selectedNews.content}</p>
              <button onClick={() => navigateToSource(selectedNews.source)}>Read More</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateNews;

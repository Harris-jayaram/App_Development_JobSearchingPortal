import React, { useState } from 'react';
import '../../Assest/css/Chatbot.css'; // Ensure this file is updated with new styles
import chatbotLogo from "../../Assest/Img/chatbot.png"; // Use a logo with transparent background

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I assist with your job search today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: generateBotResponse(input), sender: 'bot' }
        ]);
      }, 1000);
    }
  };

  const generateBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('job search')) {
      return "I can help you with job searches. What type of job are you looking for?";
    } else if (lowerCaseMessage.includes('apply')) {
      return "To apply for a job, please visit the job posting and click 'Apply'.";
    } else if (lowerCaseMessage.includes('remote')) {
      return "We have many remote job opportunities. Check out our remote jobs section.";
    } else if (lowerCaseMessage.includes('status')) {
      return "I can provide updates on your application status. Please provide your application ID.";
    } else if (lowerCaseMessage.includes('salary')) {
      return "For salary-related inquiries, please check the job description or contact HR.";
    } else if (lowerCaseMessage.includes('interview')) {
      return "Need tips for an interview? I can help with that. What specific advice do you need?";
    } else if (lowerCaseMessage.includes('resume')) {
      return "A well-crafted resume is key to landing a job. Do you need tips on writing a resume?";
    } else if (lowerCaseMessage.includes('cover letter')) {
      return "Cover letters should be tailored to each job. Need help drafting one?";
    } else if (lowerCaseMessage.includes('networking')) {
      return "Networking is crucial for job hunting. Consider attending industry events or joining online forums.";
    } else if (lowerCaseMessage.includes('skills')) {
      return "Highlighting your skills is important. Which skills are you focusing on?";
    } else if (lowerCaseMessage.includes('experience')) {
      return "Employers value relevant experience. Would you like tips on showcasing your experience?";
    } else if (lowerCaseMessage.includes('education')) {
      return "Education can be a key factor in job applications. Do you need advice on how to present your qualifications?";
    } else if (lowerCaseMessage.includes('references')) {
      return "References can be powerful. Make sure to include professionals who can vouch for your work.";
    } else if (lowerCaseMessage.includes('follow up')) {
      return "Following up after an application shows initiative. Would you like tips on how to do this effectively?";
    } else if (lowerCaseMessage.includes('job board')) {
      return "There are many job boards available. Have you tried searching on our platform or others?";
    } else if (lowerCaseMessage.includes('freelance')) {
      return "Freelancing can be a great option. Are you interested in freelance opportunities?";
    } else if (lowerCaseMessage.includes('internship')) {
      return "Internships are a great way to gain experience. Are you looking for internship opportunities?";
    } else if (lowerCaseMessage.includes('benefits')) {
      return "Employee benefits can vary. Would you like more information on common benefits offered by employers?";
    } else if (lowerCaseMessage.includes('company culture')) {
      return "Company culture is important for job satisfaction. Are you looking for a particular type of workplace culture?";
    } else if (lowerCaseMessage.includes('job offer')) {
      return "Receiving a job offer is exciting! Do you need help evaluating an offer or negotiating terms?";
    } else {
      return "I'm here to assist you with job search and application processes. How can I help?";
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <img src={chatbotLogo} alt="Chatbot Logo" className="chatbot-logo" />
          <button className="chatbot-close" onClick={toggleChat}>×</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about jobs..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <img src={chatbotLogo} alt="Chatbot Icon" />
        </button>
      )}
    </>
  );
};

export default Chatbot;

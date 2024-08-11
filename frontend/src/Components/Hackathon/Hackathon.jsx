import React, { useState } from 'react';
import './Hackathon.css';
import {
  FaBullseye,
  FaUsers,
  FaClipboardCheck,
  FaHandshake,
  FaBuilding,
} from 'react-icons/fa';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, CircularProgress, Tooltip } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hackathon = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    type: 'company',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, mobile, email } = formData;

    if (!name || !mobile || !email) {
      toast.error('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const message = `Hi, this is ${name}. I'm interested in your hackathon services. Please provide me with more details.`;
      const recipientNumber = '9150566321';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodeURIComponent(message)}`;

      await new Promise((resolve) => setTimeout(resolve, 2000));

      window.open(whatsappUrl, '_blank');
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hackathon-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="callback-section">
        <div className="callback-info">
          <div className="callback-info">
  <h1>Hackathon</h1>
  <p>
    Unlock the potential of innovation by partnering with us to host dynamic hackathons tailored to your organization's needs. Whether you're a company seeking to engage with top talent or a consultant looking to connect with innovative minds, our hackathons provide the perfect platform to discover, engage, and hire the brightest talent.
  </p>
  <p>
    Our hackathons are designed to foster creativity, collaboration, and competition among participants, allowing them to showcase their skills and problem-solving abilities. By participating, your organization gains access to a diverse pool of candidates, each eager to tackle real-world challenges and contribute to meaningful projects.
  </p>
  <p>
    Not only do our hackathons help you find the right talent, but they also enhance your brand's reputation as an industry leader. You'll have the opportunity to build lasting relationships with participants, engage with them in a meaningful way, and ultimately, hire those who best fit your company's culture and goals.
  </p>
  <p>
    Fill out the form to request a call back from our team and learn more about how our hackathons can be customized to meet your specific objectives. Let us help you transform your hiring process and drive innovation within your organization.
  </p>
</div>

        </div>
        <div className="callback-form">
          <h3>Request a Call Back</h3>
          <form onSubmit={handleSubmit} className="advanced-form">
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              disabled={isSubmitting}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              disabled={isSubmitting}
              type="email"
            />
            <TextField
              name="mobile"
              label="Mobile"
              variant="outlined"
              value={formData.mobile}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              disabled={isSubmitting}
              type="tel"
              inputProps={{ pattern: "[0-9]{10}" }}
              helperText="Please enter a valid 10-digit mobile number"
            />
            <RadioGroup
              row
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="radio-group"
            >
              <FormControlLabel
                value="company"
                control={<Radio />}
                label="Company"
                disabled={isSubmitting}
              />
              <FormControlLabel
                value="consultant"
                control={<Radio />}
                label="Consultant"
                disabled={isSubmitting}
              />
            </RadioGroup>
            <Tooltip title="Click to submit your request" placement="top">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                className="submit-button"
                endIcon={
                  isSubmitting ? <CircularProgress size={24} /> : null
                }
              >
                {isSubmitting ? 'Sending...' : 'Get a Call Back'}
              </Button>
            </Tooltip>
          </form>
        </div>
      </div>

      <div className="hackathon-features">
        <h2>Hackathons for Companies</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaBullseye className="feature-icon" />
            <h3>Attract</h3>
            <p>Attract a large pool of talented individuals.</p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Engage</h3>
            <p>Engage these talented individuals in a competitive environment.</p>
          </div>
          <div className="feature-card">
            <FaClipboardCheck className="feature-icon" />
            <h3>Screen</h3>
            <p>Screen the talent based on your company's specific requirements.</p>
          </div>
          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Hire</h3>
            <p>Hire candidates that best suit your requirements.</p>
          </div>
          <div className="feature-card">
            <FaBuilding className="feature-icon" />
            <h3>Employer Brand</h3>
            <p>Enhance and differentiate your brand from competitors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaAddressCard, FaBook, FaPhone, FaCreditCard, FaMoneyBillWave, FaCalendarAlt, FaClock, FaFlag, FaTicketAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../../Assest/css/BuyNow.css'; // Import the CSS file

const BuyNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    course: '',
    phone: '',
    payment: '',
    amount: '',
    date: '',
    duration: '',
    country: '',
    coupon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send('service_o8t50xl', 'template_1yljwv8', formData, 'e4myIqx69FAyxz7Kl')
      .then((response) => {
        toast.success('Purchase successful! You will receive an email soon.');
        setTimeout(() => {
          navigate('/');
        }, 4000); // Delay navigation for 4 seconds
      })
      .catch((error) => {
        toast.error('Something went wrong! Please try again.');
      });
  };

  return (
    <div className="buy-now-container">
      <div className="left-side"></div>
      <div className="right-side">
        <h2 className="fade-in">Buy Course</h2>
        <form onSubmit={handleSubmit} className="buy-form fade-in">
          <div className="form-group">
            <label className="label-group" htmlFor="name"><FaUser /> Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="email"><FaEnvelope /> Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="address"><FaAddressCard /> Address</label>
            <textarea 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="course"><FaBook /> Course</label>
            <input 
              type="text" 
              id="course" 
              name="course" 
              value={formData.course} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="phone"><FaPhone /> Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="payment"><FaCreditCard /> Payment Details</label>
            <input 
              type="text" 
              id="payment" 
              name="payment" 
              value={formData.payment} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="amount"><FaMoneyBillWave /> Amount</label>
            <input 
              type="number" 
              id="amount" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="date"><FaCalendarAlt /> Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="duration"><FaClock /> Duration (weeks)</label>
            <input 
              type="number" 
              id="duration" 
              name="duration" 
              value={formData.duration} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="country"><FaFlag /> Country</label>
            <input 
              type="text" 
              id="country" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="label-group" htmlFor="coupon"><FaTicketAlt /> Coupon Code</label>
            <input 
              
              type="text" 
              id="coupon" 
              name="coupon" 
              value={formData.coupon} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyNow;
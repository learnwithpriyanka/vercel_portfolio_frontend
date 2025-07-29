

import { useState } from 'react';
import './ContactSection.css'; // Assuming you have a CSS file for styling
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccessModal(false), 4000);
      }
    } catch (error) {
      console.error('Error sending message');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
        </p>

        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <span style={{ background: '#4f6cf7' }}><FaEnvelope /></span>
            <span><b>Email</b> <br />priyankakumari80921@gmail.com</span>
          </div>
          <div className="info-card">
            <span style={{ background: '#4fd17d' }}><FaPhoneAlt /></span>
            <span><b>Phone</b> <br />+91 7564917119</span>
          </div>
          <div className="info-card">
            <span style={{ background: '#a259f7' }}><FiMapPin /></span>
            <span><b>Location</b> <br />Vijayawada, Andhra Pradesh, India</span>
          </div>

          <div className="social-links">
          <h3>Connect With Me</h3>
          <div className="icons">
            <a href="https://www.linkedin.com/in/priyanka-kumari-b91791341/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ background: '#4f6cf7', color: '#fff' }}><FaLinkedin /></a>
            <a href="https://github.com/learnwithpriyanka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ background: '#232533', color: '#fff' }}><FaGithub /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ background: '#6cb5f9', color: '#fff' }}><FaTwitter /></a>
            <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" style={{ background: '#ea4c89', color: '#fff' }}><FaDribbble /></a>
          </div>
        </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              required
            />
            <div>{formData.message.length}/500</div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:bg-emerald-600 transition-all duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        
      </div>

      

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="modal-content">
            <h4>Message Sent!</h4>
            <p>Thank you for reaching out! I'll get back to you within 24 hours.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:bg-emerald-600 transition-all duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
                    
                  
                  
       
                
              
            
          
        
      

    
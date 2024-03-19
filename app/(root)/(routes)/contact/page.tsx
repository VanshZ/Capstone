import React from 'react';

const Contact: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    backgroundColor: '#b24c43', // Using the provided color as a solid background
    color: 'white',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contactFormStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    width: '500px',
    color: '#333',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '20px', // Spacing after header
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px', // Spacing after label
    fontWeight: 'bold', // Bold labels
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', // Input takes the full width of the form
    padding: '10px',
    marginBottom: '20px', // Spacing after input
    borderRadius: '5px', // Slightly rounded borders for inputs
    border: '1px solid #ccc', // Subtle border for inputs
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#b24c43', // Button color to match the header
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <form style={contactFormStyle}>
        <h1 style={headerStyle}>Contact Us</h1>
        <label style={labelStyle} htmlFor="name">Name</label>
        <input style={inputStyle} type="text" id="name" placeholder="Your Name" />

        <label style={labelStyle} htmlFor="email">Email</label>
        <input style={inputStyle} type="email" id="email" placeholder="Your Email" />

        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea style={{ ...inputStyle, height: '100px' }} id="message" placeholder="Your Message" />

        <button style={buttonStyle} type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

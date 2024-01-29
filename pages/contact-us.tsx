import React from 'react';
import { MainNav } from "@/components/main-nav";

const Portfolio: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/1418045846/photo/email-phone-website-contact-us-website-banner-marketing.jpg?s=612x612&w=0&k=20&c=Pj2Ne9ywqx8MHpGqcorA9zfpLttuXdfSw8b9-itGOD0=")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Make sure the div covers the whole viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Horizontally center the content
    paddingLeft: '10%', // Decreased more to move text box further to the left
    paddingTop: '-10%', // Increased negative value to move the content further up
  };

  const textBoxStyle = {
    fontSize: '20px', // Increase font size as needed
  };

  return (
    <div style={backgroundStyle}>
    <MainNav className="mx-6" />
      <h1>Contact Us</h1>
      <div style={textBoxStyle}>
        <p>Founders of ROIPro, contact us using our emails below!</p>
        <p>Sara Aggarwal - Saragg24@bergen.org</p>
        <p>Vansh Zota - Vanzot24@bergen.org</p>
        <p>Aaron Williams - Aarwil24@bergen.org</p>
        <p>Zsofia Gordon - Zsogor24@bergen.org</p>
      </div>
    </div>
  );
}

export default Portfolio;
import React from 'react';

const Portfolio: React.FC = () => {
    const backgroundStyle: React.CSSProperties = {
        backgroundImage: `url("https://media.istockphoto.com/id/1418045846/photo/email-phone-website-contact-us-website-banner-marketing.jpg?s=612x612&w=0&k=20&c=Pj2Ne9ywqx8MHpGqcorA9zfpLttuXdfSw8b9-itGOD0=")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '10%',
        paddingTop: '0', // Adjust this value as needed but keep it positive or 0
    };

    const textBoxStyle: React.CSSProperties = {
        fontSize: '20px',
    };

    return (
        <div style={backgroundStyle}>
            <h1>Contact Us</h1>
            <div style={textBoxStyle}>
                <p>Founders of ROIPro, contact us using our emails below!</p>
                <p>Sara Aggarwal - Saragg24@bergen.org</p>
                <p>Vansh Zota - Vanzot24@bergen.org</p>
                <p>Aaron Williams - Aarwil24@bergen.org</p>
            </div>
        </div>
    );
}

export default Portfolio;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faXTwitter, faInstagram,faGithub  } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <>
        <footer style={footerStyle}>
                <p>&copy; 2023 Book Your Cookiesz</p>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                </a>
                <a href="https://github.com/mukuljain999/BookYourCookies/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={iconStyle}/>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} style={iconStyle}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
                </a>
            </footer>
        </>
        

    );
};


const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    width: '100vw',
};

const iconStyle = {
    fontSize: '2rem',
    color: 'rgb(255, 255, 255)',
    margin: '0 0.5rem',
};
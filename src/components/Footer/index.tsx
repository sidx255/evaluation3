import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='body-padding footer'>
      <div className='footer-text'>THEMES</div>
      <div className="themes">
        <div className="theme-color" style={{ backgroundColor: '#000000' }}>
            blue
        </div>
        <div className="theme-color" style={{ backgroundColor: '#1f1f1f' }}>
            green
        </div>
        <div className="theme-color" style={{ backgroundColor: '#2f2f2f' }}>
            red
        </div>
      </div>
    </div>

    
  );
};

export default Footer;
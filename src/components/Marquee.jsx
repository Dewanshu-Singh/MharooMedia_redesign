import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const content = (
    <span className="marquee-text">
      "Biggest <span className="google-word">
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#EA4335' }}>o</span>
        <span style={{ color: '#FBBC05' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#34A853' }}>l</span>
        <span style={{ color: '#EA4335' }}>e</span>
      </span> Partner Agency in Rajasthan"
    </span>
  );

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;

import React from 'react';
import './CollabMarquee.css';

const CollabMarquee = () => {
  const collaborations = [
    { name: "Google", icon: "/google-lens-icon-logo-symbol-free-png.webp", text: "Google" },
    { name: "Snapchat", icon: "/snapchat-icon-free-png.webp", text: "Snapchat" },
    { name: "Jio HotStar", icon: "/jiohostar.webp", text: "Jio HotStar" },
    { name: "Meta", icon: "/meta1.webp", text: "Meta" }
  ];

  const content = collaborations.map((collab, index) => (
    <div className="collab-item" key={index}>
      <img src={collab.icon} alt={collab.name} className="collab-icon" onError={(e) => e.target.style.display = 'none'} />
      <span className="collab-text">{collab.text}</span>
    </div>
  ));

  return (
    <div className="collab-marquee-container">
      <div className="collab-marquee-track">
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default CollabMarquee;

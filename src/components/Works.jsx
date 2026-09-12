import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Works.css';
import Magnetic from './Magnetic';

// Only using 5 of the highest quality photos for maximum premium impact
const worksData = [
  { id: 1, title: 'Political Rally', image: "/_DSC3589.jpg" },
  { id: 2, title: 'Corporate Conclave', image: "/_DSC3551.jpg" },
  { id: 3, title: 'Stage Production', image: "/_MG_0967.jpg" },
  { id: 4, title: 'Brand Launch', image: "/DSC02486.jpg" },
  { id: 5, title: 'Concert Night', image: "/IMG_0556.jpg" }
];

const Works = () => {
  // Default to the first image being expanded
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="works-section" id="portfolio">
      <div className="container text-center works-header">
        <h2 className="section-title">Events <span className="highlight">Covered</span></h2>
        <p className="works-subtitle">A glimpse into the stories we've brought to life</p>
      </div>

      <div className="accordion-gallery">
        {worksData.map((work, index) => (
          <div 
            key={work.id}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img src={work.image} alt={work.title} onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="accordion-overlay">
              <h3>{work.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: '60px' }}>
        <Magnetic>
          <Link to="/portfolio" style={{ display: 'inline-block' }}>
            <button className="btn-primary magnetic-target">Explore Full Gallery</button>
          </Link>
        </Magnetic>
      </div>
    </section>
  );
};

export default Works;

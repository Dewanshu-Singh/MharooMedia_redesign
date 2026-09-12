import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Journey.css';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    step: "01",
    title: "The Inception",
    desc: "Where the idea started. A passionate group of creators with a big vision to revolutionize digital experiences.",
    color: "#d9a1a0" // Muted pinkish/rose gold
  },
  {
    step: "02",
    title: "Assembling the Team",
    desc: "Gathering the creative minds. We expanded our talent pool, bringing in top-tier designers, developers, and strategists.",
    color: "#6b616c" // Dark mauve/purple
  },
  {
    step: "03",
    title: "First Major Success",
    desc: "Landing our first big campaign that put us on the map and proved our data-driven strategies work.",
    color: "#463d42" // Dark espresso
  },
  {
    step: "04",
    title: "Scaling & Innovation",
    desc: "Expanding our services globally and pushing the boundaries of what is possible in the digital space.",
    color: "#bc483a" // Deep terracotta red
  },
  {
    step: "05",
    title: "The Future",
    desc: "Continuously evolving. We are looking ahead, adopting new technologies, and shaping the future of digital media.",
    color: "#e88031" // Burnt orange
  }
];

const Journey = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.ribbon-item');
    
    items.forEach((item, i) => {
      const isEven = i % 2 === 0;
      
      // 1. Initial Entrance Animation (Scrubbed slide in from sides)
      gsap.fromTo(item,
        { 
          opacity: 0, 
          x: isEven ? -300 : 300, 
          rotationY: isEven ? -25 : 25 
        },
        { 
          opacity: 1, 
          x: 0, 
          rotationY: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 100%", // Start when just entering the viewport
            end: "top 70%",    // Finish sliding into place
            scrub: 1.5
          }
        }
      );

      // 2. Scroll Focus (Dull -> Bright as it enters center)
      gsap.fromTo(item,
        { filter: 'brightness(0.3) grayscale(0.8)', scale: 0.9 },
        { 
          filter: 'brightness(1) grayscale(0)', 
          scale: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 75%", // start brightening when card is in lower middle
            end: "top 35%",   // fully bright at upper middle
            scrub: 1.5
          }
        }
      );

      // 3. Scroll Defocus (Bright -> Dull as it leaves top)
      gsap.to(item,
        { 
          filter: 'brightness(0.3) grayscale(0.8)', 
          scale: 0.9,
          scrollTrigger: {
            trigger: item,
            start: "top 15%", 
            end: "bottom top", 
            scrub: 1.5
          }
        }
      );

      // 4. Parallax Text inside the card
      const title = item.querySelector('.ribbon-content h3');
      const desc = item.querySelector('.ribbon-content p');
      const step = item.querySelector('.ribbon-step');
      
      if (title && desc && step) {
        gsap.fromTo(title, 
          { y: 25 }, 
          { y: -25, ease: 'none', scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true } }
        );
        gsap.fromTo(desc, 
          { y: 15 }, 
          { y: -15, ease: 'none', scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true } }
        );
        // The big step number moves oppositely for cool depth
        gsap.fromTo(step, 
          { y: -20 }, 
          { y: 20, ease: 'none', scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true } }
        );
      }

    });
  }, { scope: containerRef });

  return (
    <section className="journey-section" id="journey" ref={containerRef}>
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '80px' }}>
          <h2 className="section-title">Our <span className="highlight">Journey</span></h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>The milestones that shaped Mharoo Media</p>
        </div>

        <div className="ribbon-timeline">
          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                className={`ribbon-item ${isEven ? 'ribbon-left' : 'ribbon-right'}`} 
                key={index}
                style={{ '--ribbon-color': item.color }}
              >
                {/* The main folded card face */}
                <div className="ribbon-card">
                  <div className="ribbon-step">{item.step}</div>
                  <div className="ribbon-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
                
                {/* The 3D shadow fold that connects to the next block */}
                {index !== journeyData.length - 1 && (
                  <div className="ribbon-fold"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;

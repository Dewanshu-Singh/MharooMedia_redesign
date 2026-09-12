import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './CreativesSection.css';

gsap.registerPlugin(ScrollTrigger);

const CreativesSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const creatives = [
    { id: 1, img: '/Design1.PNG', alt: 'Creative 1', startClass: 'item-1' },
    { id: 2, img: '/design2.PNG', alt: 'Creative 2', startClass: 'item-2' },
    { id: 3, img: '/design3.PNG', alt: 'Creative 3', startClass: 'item-3' },
    { id: 4, img: '/design4.PNG', alt: 'Creative 4', startClass: 'item-4' },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500", // Longer scroll for a deeper tunnel effect
        pin: true,
        scrub: true, 
        invalidateOnRefresh: true,
      }
    });

    // 3D Tunnel Zoom Effect
    // Each item zooms massively (scale: 4) and fades out (opacity: 0) to reveal the next one underneath
    tl.to('.item-1', { scale: 5, opacity: 0, duration: 1, ease: "power2.in" })
      .to('.item-2', { scale: 5, opacity: 0, duration: 1, ease: "power2.in" })
      .to('.item-3', { scale: 5, opacity: 0, duration: 1, ease: "power2.in" })
      .to('.item-4', { scale: 1.15, duration: 1, ease: "power1.out" }); // Last item stays and subtly scales up

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === sectionRef.current) t.kill();
      });
    };
  }, { scope: sectionRef });

  return (
    <section className="creatives-section" ref={sectionRef} id="creatives">
      <div className="creatives-section-title">
        <h2>Our <span>Creatives</span></h2>
        <p>A glimpse into our high-converting designs.</p>
      </div>
      
      <div className="creatives-container">
        <div className="creatives-grid" ref={gridRef}>
          {creatives.map((item) => (
            <div className={`creative-grid-item ${item.startClass}`} key={item.id}>
              <img 
                src={item.img} 
                alt={item.alt} 
                className="creative-grid-img" 
                onError={(e) => {
                  console.log('Error loading:', item.img);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativesSection;

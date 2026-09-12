import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  
  const collaborations = [
    { name: "Google", icon: "/google-lens-icon-logo-symbol-free-png.webp" },
    { name: "Snapchat", icon: "/snapchat-icon-free-png.webp" },
    { name: "Jio HotStar", icon: "/jiohostar.webp" },
    { name: "Meta", icon: "/meta1.webp" }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // Premium blur & slide up reveal for text
    tl.fromTo('.about-left .section-title',
      { y: 50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
    .fromTo('.about-desc',
      { y: 30, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out', stagger: 0.15 },
      "-=0.7"
    )
    // Scale and flip the glass card in
    .fromTo('.about-right',
      { x: 50, opacity: 0, rotationY: 15, scale: 0.9 },
      { x: 0, opacity: 1, rotationY: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
      "-=0.8"
    )
    .fromTo('.collab-title',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.6"
    )
    // Stagger logos with a spring effect
    .fromTo('.collab-card',
      { y: 40, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.6)', stagger: 0.15 },
      "-=0.5"
    );
  }, { scope: containerRef });

  // 3D Tilt Effect on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Update mouse coordinates for spotlight effect on inner cards
    const collabCards = document.querySelectorAll('.collab-card');
    collabCards.forEach((c) => {
      const cRect = c.getBoundingClientRect();
      const cX = e.clientX - cRect.left;
      const cY = e.clientY - cRect.top;
      c.style.setProperty('--mouse-x', `${cX}px`);
      c.style.setProperty('--mouse-y', `${cY}px`);
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section className="about-section" id="about" ref={containerRef}>
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <h2 className="section-title">About <span className="highlight">MharooMedia</span></h2>
            <p className="about-desc">
              We are a premier digital marketing agency dedicated to shaping narratives that win. 
              By blending data-driven strategies with bold creative execution, we scale brands, 
              amplify reach, and deliver measurable growth across all digital touchpoints.
            </p>
            <p className="about-desc" style={{ marginTop: '15px' }}>
              From managing high-stakes political campaigns in the war room to launching ambitious educational 
              platforms into the mainstream, our team thrives on driving impactful results. We don't 
              just follow trends—we set them, ensuring your brand commands attention in an ever-evolving digital landscape.
            </p>
          </div>
          
          <div 
            className="about-right" 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="collab-title">Official Collaborations</h3>
            <div className="collab-grid">
              {collaborations.map((collab, idx) => (
                <div className="collab-card" key={idx}>
                  <img 
                    src={collab.icon} 
                    alt={collab.name} 
                    className="collab-logo-img" 
                    onError={(e) => e.target.style.display = 'none'} 
                  />
                  <span>{collab.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

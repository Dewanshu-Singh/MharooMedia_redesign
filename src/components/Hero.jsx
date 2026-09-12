import React, { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Entrance animations
    tl.fromTo('.hero-top-badge',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.hero-wide-text', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2 },
      "-=0.4"
    )
    .fromTo('.narrative-char',
      { x: 80, opacity: 0, skewX: -25 },
      { x: 0, opacity: 1, skewX: 0, duration: 0.6, ease: 'back.out(1.5)', stagger: 0.04 },
      "-=0.6"
    )
    .fromTo('.new-hero-desc', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo('.hero-actions-left', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 
      "-=0.6"
    )
    .fromTo('.hero-stats-right',
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.4"
    );

  }, { scope: heroRef });

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-layout-new">
          <div className="hero-content-left">
            <div className="hero-top-badge">
              <span className="red-dot"></span>
              <span className="badge-text">AMPLIFY MEDIA - DIGITAL MARKETING FOR EDUCATION & ELECTIONS</span>
            </div>

            <h1 className="hero-title-left">
              <span className="hero-wide-text">WE SHAPE</span>
              <span className="hero-cursive-text">
                {"narratives".split('').map((char, index) => (
                  <span key={index} className="narrative-char" style={{ display: 'inline-block' }}>{char}</span>
                ))}
              </span>
              <span className="hero-wide-text">THAT WIN.</span>
            </h1>

            <p className="new-hero-desc">
              The marketing force behind EdTech giants and<br className="hide-mobile" />
              winning political campaigns. Data in the war room,<br className="hide-mobile" />
              cinema on the screen.
            </p>
            
            <div className="hero-actions-left">
              <button 
                className="btn-primary" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                START A CAMPAIGN <ArrowRight size={16} style={{marginLeft: '8px'}} />
              </button>

              <button className="btn-secondary play-btn">
                <Play size={16} style={{marginRight: '8px'}} /> WATCH OUR ADS
              </button>
            </div>
          </div>
          
          <div className="hero-stats-right">
            <div className="stats-row">
              <div className="stat-item">
                <h3 className="stat-value">3<span className="stat-accent">x</span></h3>
                <p className="stats-label">Avg engagement lift</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-value">50<span className="stat-accent">+</span></h3>
                <p className="stats-label">Brand campaigns</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-value">₹25<span className="stat-accent">Cr+</span></h3>
                <p className="stats-label">Ad Spend Managed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-value">100<span className="stat-accent">%</span></h3>
                <p className="stats-label">Dedicated growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

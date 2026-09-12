import React from 'react';

import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutSection from '../components/AboutSection';
import CreativesSection from '../components/CreativesSection';
import Journey from '../components/Journey';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Works from '../components/Works';
import FeaturedVideos from '../components/FeaturedVideos';
import ReelsSection from '../components/ReelsSection';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <Hero />
        <Marquee />
        <AboutSection />
        <Reveal><Clients /></Reveal>
        <Reveal><Services /></Reveal>
        <CreativesSection />
        <Reveal><WhyChooseUs /></Reveal>
        <Reveal><Works /></Reveal>
        <Reveal><FeaturedVideos /></Reveal>
        <Journey />
        <Reveal><ReelsSection /></Reveal>
        <Reveal><Contact /></Reveal>
      </div>
    </div>
  );
}

export default Home;

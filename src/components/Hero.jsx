// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white py-5">
      <div className="container-fluid px-3 px-md-5">
          <div className="row align-items-center">

                {/* Right side image (mobile & tablet pe upar, desktop pe right) */}
          <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
            <img src="/Sets/hero_bg_1.png" alt="Hero" className="hero-img img-fluid" />
          </div>
          
               {/* Left side text (mobile me neeche, desktop me left) */}
          <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
            <h1 className="hero-title_1">"Innovate. Build. Elevate."</h1>
            <h4 className="hero-title_2">
              Empowering businesses with next-gen software, websites, and digital solutions tailored to your vision.
            </h4>
            <p className="hero-subtitle">
              A clean tech-themed visual or animation showing software, websites, and business growth.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 align-items-center align-items-sm-start">
              <a href="#contact" className="btn d-inline-block"> &#9830; Get a Free Consultation &#9830;</a>
              <a href="#services" className="btn d-inline-block"> &#9830; Explore Our Services &#9830;</a>
              
                  {/* <a href="#contact" className="btn btn-primary d-inline-block "> &#9830; Get a Free Consultation &#9830;</a>
                  <a href="#Services" className="btn btn-primary d-inline-block "> &#9830; Explore Our Services &#9830;</a> */}

                </div>
            </div>

          </div>
      </div>

    </section>
  );
};

export default Hero;

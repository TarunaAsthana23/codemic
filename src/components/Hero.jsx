// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white py-5">
      <div className="container-fluid px-3 px-md-5">
          <div className="row align-items-center">

                {/* Left side text */}
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0"> 
                <h1 className="hero-title_1"> "Innovate. Build. Elevate." </h1>
                <h4 className="hero-title_2"> Empowering businesses with next-gen software, websites, and digital solutions tailored to your vision. </h4>
                <p className="hero-subtitle"> A clean tech-themed visual or animation showing software, websites, and business growth. </p>
                <div className="d-flex flex-column flex-sm-row gap-3 align-items-center align-items-sm-start">
                  <a href="#contact" className="btn d-inline-block "> &#9830; Get a Free Consultation &#9830;</a>
                  <a href="#Services" className="btn d-inline-block "> &#9830; Explore Our Services &#9830;</a>

                  {/* <a href="#contact" className="btn btn-primary d-inline-block "> &#9830; Get a Free Consultation &#9830;</a>
                  <a href="#Services" className="btn btn-primary d-inline-block "> &#9830; Explore Our Services &#9830;</a> */}

                </div>
            </div>

                {/* Right side image */}
            <div className="col-12  col-md-6  text-center">
                <img src="/Sets/hero_bg.png" alt="Hero" className="hero-img img-fluid" />
            </div>
          
          </div>
      </div>

    </section>
  );
};

export default Hero;

// src/components/About.jsx
import React from 'react';
import './About.css'; // Extra custom spacing adjustments
import { FaRocket, FaBolt, FaHandshake, FaLock } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5">
        <div className="container text-center py-5">
          <h1 className="fw-bold">Who We Are</h1>
          <div className="underline mx-auto my-2"></div>
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
              <img src="/Sets/About.jpg" alt="About" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 ps-lg-5">
              {/* <div className="col-lg-6 col-md-6 col-sm-12 mb-4 ps-lg-4 text-center text-lg-start"> */}
              {/* <h1 className="about_1 mb-3 fw-bold fs-2 fs-md-3 text-center">Who We Are ?</h1> */}
              <p className="par mb-4">
                Codemic is a forward-thinking software development company dedicated to transforming ideas into impactful digital solutions. 
                From startups to enterprises, we help our clients innovate smarter, build faster, and elevate their business with tailor-made technology.
              </p>
              <div className="quote-box p-3 rounded">
              <em>
                "To bridge the gap between ideas and innovation by delivering cutting-edge, user-focused digital solutions."
              </em>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <FaRocket className="about-icon me-2" size={20} />
                <strong>Innovative Approach</strong>
                <p className="mb-0 text-muted small">We stay ahead of trends.</p>
              </div>
              <div className="col-md-6 mb-3">
                <FaBolt className="about-icon me-2" size={20} />
                <strong>Agile & Fast Delivery</strong>
                <p className="mb-0 text-muted small">Quality without delay.</p>
              </div>
              <div className="col-md-6 mb-3">
                <FaHandshake className="about-icon me-2" size={20} />
                <strong>Client-Centric</strong>
                <p className="mb-0 text-muted small">Your goals are our blueprint.</p>
              </div>
              <div className="col-md-6 mb-3">
                <FaLock className="about-icon me-2" size={20} />
                <strong>Secure & Scalable</strong>
                <p className="mb-0 text-muted small">Built for the future.</p>
              </div>
            </div>

          </div>

          </div>  
        </div>


    </section>
  );
};

export default About;

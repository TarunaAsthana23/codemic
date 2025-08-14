// src/components/Footer.jsx
import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark py-5">
  <div className="container bg-dark text-light">
    <div className="row">

      {/* About Codemic */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
        <h5 className="fw-bold">About Codemic</h5>
        <p>Codemic is your trusted technology partner for software, websites, and digital growth.</p>
      </div>

      {/* Quick Links */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <h5 className="fw-bold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
          <li><a href="#about" className="text-light text-decoration-none">About</a></li>
          <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
          <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
          <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4  py-3">
        <h5 className="fw-bold">Contact Info</h5>
        <ul className="list-unstyled">
          <li><a href="mailto:hiyasrivastava777@gmail.com" className="foot_con"><i className="fa fa-envelope me-2"></i></a>hiyasrivastava777@gmail.com</li>
          <li><a href="tel:+917985877742" className="foot_con"><i className="fa fa-phone me-2"></i></a> +91 7985877743</li>
          <li><a href="" className="foot_con"><i className="fa fa-map-marker me-2"></i></a> Laxmi Nagar, Delhi, India</li>
        </ul>
      </div>

      {/* Stay Updated */}
      <div className="col-12 col-sm-6 col-md-12 col-lg-3 mb-4">
        <h5 className="fw-bold">Stay Updated</h5>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <form className="d-flex">
          <input type="email" placeholder="Your email" className="form-control me-2" />
          <button type="submit" className="foot_btn">
          {/* <button type="submit" className="btn btn-warning"> */}
            <i className="fa fa-paper-plane"></i>
          </button>
        </form>
      </div>

    </div>

    <hr className="border- bg-dark text-light"/>

    <div className="d-flex justify-content-between align-items-center bg-dark text-light smal">
      © 2025 Codemic. All Rights Reserved.
      <div className="mt-3">
        <a href="https://www.linkedin.com/in/pragyaasthana/" className="foot_icon me-2"><i className="fa fa-linkedin"></i></a>
         <a href="https://www.linkedin.com/in/pragyaasthana/" className="foot_icon me-2"><i className="fa fa-github "></i></a>
        {/* <a href="https://instagram.com" className="foot_icon me-3"><i className="fa fa-instagram "></i></a> */}
        {/* <a href="https://facebook.com" className="foot_icon me-3"><i className="fa fa-facebook "></i></a> */}
        {/* <a href="https://facebook.com" className="text-secondary me-3"><i className="fa fa-facebook text-light"></i></a> */}
        {/* <a href="https://github.com" className="text-secondary"><i className="fa fa-github text-light"></i></a> */}

      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;

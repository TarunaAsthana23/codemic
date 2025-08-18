// ContactPage.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
    {/* <section id="contact" className="py-5"> */}
      <div className="contact container text-center py-5 ">
        <h1 className="fw-bold text-center">
          Let's Build Something Amazing Together
        </h1>
        <div className="underline mx-auto"></div>
        
        <div className="contact row align-items-start md-4">

        {/* Left Form */}  {/* Column 1 - Form */}
        
        {/* <div className="col-lg-6 px-3 px-md-4 px-lg-5"> */}

          {/* <div className="col-lg-6 px-4 px-md-5 px-lg-5"> */}
           <div className="col-12 col-md-6 col-lg-4 mb-4 py-5">

          <div className="contact-card">
            <form>
              <div className="mb-3 text-start">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your email" />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="Your phone number" />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Your Message</label>
                <textarea rows="4" className="form-control" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="con_btn w-100 ">
              {/* <button type="submit" className="btn btn-warning w-100"> */}
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Info */}   {/* Column 2 - Contact Information */}

        {/* <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center text-center mt-4 mt-lg-0"> */}
        <div className="col-12 col-md-6 col-lg-4 mb-4 text-center py-5 ">
          <h4 className="fw-bold mb-4 fs-2 pb-5">Contact Information </h4>

  
            {/* Address */}
          <div className="icon-box d-flex align-items-center justify-content-center ">
            <i className="fa fa-map-marker"></i>
            <strong className="text-dark px-2 md-2 fs-4">Address</strong>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <div>
                <span className="d-block fs-6">Haleswar, Tezpur</span>
                <span className="d-block fs-6">Sonitpur, Assam,</span>
                <span className="d-block fs-6">India</span>
                <span className="d-block fs-6">784104</span>
                {/* <span className="d-block fw-bold">784104</span> */}
              </div>
            </div>
  

            {/* Email */}
          <div className="icon-box d-flex align-items-center justify-content-center">
            <i className="fa fa-envelope"></i>
            <strong className="text-dark px-2 md-2 fs-4">Email</strong>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className= "d-block fs-6" >hello@codemic.in</span>
          </div>

            {/* Website */}
          <div className="icon-box d-flex align-items-center justify-content-center">
            <i className="fa fa-phone"></i>
            <strong className="text-dark px-2 md-2 fs-4">Contact</strong>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className= "d-block fs-6">+91 8638598944</span>
          </div>

            
               {/* <a href="" className="mb-0">Laxmi Nagar, Delhi, India</a> */}  
             {/* <a href="" className="mb-0">www.asthana.in</a> */}

            {/* Social Icons */}
            <div className="social-icons mt-5">
              <h5 className="fw-bold mb-3 fs-2">Follow Us</h5>
              <a href="https://www.linkedin.com/company/codemic" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin text-light" aria-hidden="true"></i></a>
              {/* <a href="https://www.linkedin.com/company/codemic" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github text-light" ></i></a> */}
              <a href="https://www.instagram.com/codemic.in/" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram text-light" ></i></a>
              {/* <a href="https://facebook.com" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official text-light" ></i></a> */}
            </div>
          </div>
        

        

         {/* Column 3 - Timings */}
<div className="col-12 col-md-12 col-lg-4 py-5 ">
  <h4 className="fw-bold mb-4 fs-2 pb-5">Timings</h4>

  <div className="row fw-bold mb-2">
    <div className="col-4">Days</div>
    <div className="col-4">Status</div>
    <div className="col-4">Time</div>
  </div>

  {/* Now the rows */}
  <div className="row mb-2">
    <div className="col-4">Monday</div>
    <div className="col-4">Open</div>
    <div className="col-4">9am - 6pm</div>
  </div>
  <div className="row mb-2">
    <div className="col-4">Tuesday</div>
    <div className="col-4">Open</div>
    <div className="col-4">9am - 6pm</div>
  </div>
  <div className="row mb-2">
    <div className="col-4">Wednesday</div>
    <div className="col-4">Open</div>
    <div className="col-4">9am - 6pm</div>
  </div>
  <div className="row mb-2">
    <div className="col-4">Thursday</div>
    <div className="col-4">Open</div>
    <div className="col-4">9am - 6pm</div>
  </div>
  <div className="row mb-2">
    <div className="col-4">Friday</div>
    <div className="col-4">Open</div>
    <div className="col-4">9am - 6pm</div>
  </div>
  <div className="row mb-2">
    <div className="col-4">Saturday</div>
    <div className="col-4">Closed</div>
    <div className="col-4">--</div>
  </div>
  <div className="row mb-2">
    <div className="col-4">Sunday</div>
    <div className="col-4">Closed</div>
    <div className="col-4">--</div>
  </div>

</div>

         
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

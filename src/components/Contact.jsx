// ContactPage.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-4 text-center">
          Let's Build Something Amazing Together
        </h2>
        <div className="underline mx-auto my-2"></div>
        
        <div className="row align-items-start">
        {/* Left Form */}
        
        <div className="col-lg-6">
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

        {/* Right Info */}

        <div className="Right col-lg-6 text-start">
          <h4 className="fw-bold mb-4">Contact Information</h4>
          <div className="ms-lg-0 mt-4 mt-lg-0">
            <div className="d-flex mb-4">
              <div className="contact-icon">
                <i class="fa fa-map-marker "></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Address</h6>
                {/* <a href="" className="mb-0">Laxmi Nagar, Delhi, India</a> */}
                <p className="mb-0">Laxmi Nagar, Delhi, India</p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="contact-icon">
                <i class="fa fa-envelope "></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <a href="mailto:hiyasrivastava777@gmail.com" className="mb-0">hiyasrivastava777@gmail.com</a>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="contact-icon">
                <i class="fa fa-globe "></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Website</h6>
                <p className="mb-0">www.asthana.in</p>
                {/* <a href="" className="mb-0">www.asthana.in</a> */}
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-icons mt-4">
              <h5 className="fw-bold mb-3">Follow Us</h5>
              <a href="https://www.linkedin.com/in/pragyaasthana/" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin text-light" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/pragyaasthana/" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github text-light" ></i></a>
              {/* <a href="https://instagram.com" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram text-light" ></i></a> */}
              {/* <a href="https://facebook.com" aria-label="External link" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official text-light" ></i></a> */}
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

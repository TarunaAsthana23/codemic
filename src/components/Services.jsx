// src/components/Services.jsx
import React from 'react';
import { FaGlobe, FaCode, FaMobileAlt, FaProjectDiagram, FaShoppingCart, FaLightbulb } from "react-icons/fa";
import "./Services.css";


const servicesData = [
  {
    icon: <FaGlobe />,
    title: "Website Development",
    description: "Modern, responsive, and conversion-driven websites that represent your brand and drive results."
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    description: "Custom business software for efficiency and scalability, tailored to your specific needs."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Intuitive Android & iOS apps for your audience, with seamless user experience."
  },
  {
    icon: <FaProjectDiagram />,
    title: "ERP Solutions",
    description: "Manage operations with smart, integrated ERP systems that streamline your business processes."
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    description: "Powerful online stores with seamless payment integration and optimized for conversions."
  },
  {
    icon: <FaLightbulb />,
    title: "Tech Consultancy",
    description: "Expert guidance to choose the right technology stack for your business objectives."
  }
];
 
const Services = () => {

return (
  <section id="services" className="py-5 bg-light">
    <div className="container text-center">
      <h1 className="fw-bold">Our Services</h1>
      <div className="underline mx-auto my-2"></div>
      <p className="text-muted mb-5">
        We provide end-to-end tech solutions for your business growth.
      </p>

      <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <div className="service-card p-4 h-100 text-start">
                <div className="icon-box mb-3 fs-2 ">
                {/* <div className="icon-box mb-3 fs-2 text-primary"> */}
                  {service.icon}
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted small">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* <div className="col-md-4 mb-4">
          <h4>Marketing</h4>
          <p>SEO, Social Media, Paid Ads</p>
        </div> */}


    </section>
  );
};

export default Services;
        

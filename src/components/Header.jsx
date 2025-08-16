// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  
   //  Dynamic Hero Padding Fix
  useEffect(() => {
    const updateHeroPadding = () => {
      const navbar = document.querySelector(".navbar");
      const hero = document.querySelector(".hero-section");
      if (navbar && hero) {
        const navHeight = navbar.offsetHeight;
        hero.style.paddingTop = `${navHeight}px`;
      }
    };

    updateHeroPadding();
    window.addEventListener("resize", updateHeroPadding);
    return () => window.removeEventListener("resize", updateHeroPadding);
  }, []);


  
   // Scroll effect for navbar background

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
       };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  // Control body scroll lock based on menu state
    useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };


  // Handle active link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close mobile menu after click
  };

  return (
    // <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-light bg-white/90 shadow' : 'navbar-light' }`}>
      // <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-light custom-scroll-navbar shadow' : 'navbar-light bg-transparent'}`}>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-light custom-scroll-navbar shadow' : 'navbar-light bg-transparent'}`}>
      <div className="container px-3 px-sm-4 px-md-6">
        {/*   <div className="container-fluid px-3 px-sm-4 px-md-6">
              <div className="container-fluid px-3 px-sm-4 px-md-5 d-flex justify-content-between"> */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src="/Sets/Logo_1.png" alt='Logo' className='navbar-logo' />
          {/* <img src="/Sets/Logo.png" alt='Logo' className='navbar-logo img-fluid' /> */}

        </a>

             {/* Hamburger button for mobile */}

               {/* WhatsApp icon for mobile -}
               {/* WhatsApp + Hamburger - only show on mobile (d-lg-none) */}
        <div className="d-flex align-items-center d-md-none">
    <a
      href="https://wa.me/+918638598944"
      className="nav-link text-success me-4"
      // className="nav-link text-success d-lg-none"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp 
               fa-sm    /* default chhota */
               fa-lg-md /* 768px+ par bada */
               "></i>
               {/* <i className="fab fa-whatsapp fa-lg"></i> */}

    </a>

        <button className={`navbar-toggler ${menuOpen ? "open" : ""}`} type="button"  aria-label="Toggle menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        </div>
              
         {/* Hamburger button for mobile */}
        
        {/* Desktop nav links (visible on desktop), hidden on mobile ==== desktop size */}
    <ul className="navbar-nav ms-auto text-center text-md-start d-none d-md-flex">
      <li className="nav-item">
            <a className={`nav-link ${activeLink === "home" ? "active" : ""}`} href="#home" onClick={() => handleLinkClick("home")}>Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "about" ? "active" : ""}`} href="#about" onClick={() => handleLinkClick("about")}>Who We Are</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "services" ? "active" : ""}`} href="#services" onClick={() => handleLinkClick("services")}>Our Services</a>
          </li>
          {/* <li className="nav-item">
            <a className={`nav-link ${activeLink === "projects" ? "active" : ""}`} href="#projects" onClick={() => handleLinkClick("projects")}>Projects</a>
          </li> */}
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "testimonials" ? "active" : ""}`} href="#testimonials" onClick={() => handleLinkClick("testimonials")}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="#contact" onClick={() => handleLinkClick("contact")}>Contact</a>
          </li>
          <li className="nav-item ms-lg-3">
            <a href="https://wa.me/+918638598944" className="nav-link text-success" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
          </li>
      {/* <li className="nav-item"><a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="#contact">Contact</a></li> */}
      {/* <li className="nav-item ms-lg-3">
        <a href="https://wa.me/917985877742" className="nav-link text-success" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" >
          <i className="fab fa-whatsapp fa-lg"></i>
        </a>
      </li> */}
    </ul>
  </div>

       {/* Fullscreen mobile menu */}
  <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
    <ul className="navbar-nav ms-auto text-center text-lg-center mx-auto">
      <li className="nav-item">
            <a className={`nav-link ${activeLink === "home" ? "active" : ""}`} href="#home" onClick={() => handleLinkClick("home")}>Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "about" ? "active" : ""}`} href="#about" onClick={() => handleLinkClick("about")}>Who We Are</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "services" ? "active" : ""}`} href="#services" onClick={() => handleLinkClick("services")}>Our Services</a>
          </li>
          {/* <li className="nav-item">
            <a className={`nav-link ${activeLink === "projects" ? "active" : ""}`} href="#projects" onClick={() => handleLinkClick("projects")}>Projects</a>
          </li> */}
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "testimonials" ? "active" : ""}`} href="#testimonials" onClick={() => handleLinkClick("testimonials")}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="#contact" onClick={() => handleLinkClick("contact")}>Contact</a>
          </li>
      {/* <li className="nav-item"><a className={`nav-link ${activeLink === "testimonials" ? "active" : ""}`} href="#testimonials" onClick={() => setMenuOpen(false)}>Work</a></li>
      <li className="nav-item"><a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li> */}
    </ul>
  </div>
      
    </nav>
  );
};

export default Header;

  // "homepage": "https://TarunaAsthana23.github.io/codemic",

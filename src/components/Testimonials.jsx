// src/components/Testimonials.jsx
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const testimonials = [
  {
    name: "Pragya Asthana",
    role: "CEO, BrandWorks",
    image: "/Sets/image_1.webp", // yaha apni image ka URL daal dena
    feedback:
      "Codemic transformed our outdated website into a modern, fast, and user-friendly platform. Our conversions have tripled!",
    rating: 5,
  },
  {
    name: "Aruna Asthana",
    role: "Director, GreenTech",
    image: "/Sets/image_2.jpg",
    feedback:
      "Their ERP system has streamlined our operations like never before. Highly recommended for any business looking to optimize their processes!",
    rating: 5,
  },
   {
    name: "Kunal Asthana",
    role: "CEO, BrandWorks",
    image: "/Sets/image_3.webp", // yaha apni image ka URL daal dena
    feedback:
      "Codemic transformed our outdated website into a modern, fast, and user-friendly platform. Our conversions have tripled!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Director, GreenTech",
    image: "/Sets/image_4.webp",
    feedback:
      "Their ERP system has streamlined our operations like never before. Highly recommended for any business looking to optimize their processes!",
    rating: 5,
  },
];


const Testimonials = () => {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1 means forward, -1 means backward
  

  // Custom autoplay with ping-pong effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!swiperRef.current) return;

      const swiper = swiperRef.current.swiper;
      let nextIndex = swiper.activeIndex + direction;

      if (nextIndex >= testimonials.length) {
        setDirection(-1); // reverse direction
        nextIndex = testimonials.length - 2; // go back one slide
      } else if (nextIndex < 0) {
        setDirection(1); // forward direction
        nextIndex = 1; // go forward one slide
      }

      swiper.slideTo(nextIndex);
    }, 3000); // 3 seconds delay

    return () => clearInterval(interval);
  }, [direction]);


  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container text-center">
        <h2 className="fw-bold">What Our Clients Say</h2>
        <div className="underline mx-auto my-2"></div>

        
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={false} // no looping because we manually control direction
          onSwiper={(swiper) => {
            swiperRef.current = { swiper };
          }}
          style={{ paddingBottom: "40px" }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>


              <div className="testimonial-card" >
                <img src={t.image} alt={t.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", margin: "0 auto", display: "block", }} />
                <h5 style={{ marginTop: "15px" , fontWeight: "600"  }}>{t.name}</h5>
                 <p style={{ margin: "5px 0", fontStyle: "italic", color: "#000", fontWeight: "500", }} > {t.role} </p>
                <p style={{ margin: "5px 0", fontStyle: "italic", color: "#000", marginTop: "10px" }}> "{t.feedback}"</p>
                <div className="text-primary">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

         {/* Trusted Companies Section */}
        <p className="text-muted mt-5">Trusted by leading companies</p>
        {/* <div className="d-flex justify-content-center gap-4 flex-wrap">
          <img src="https://via.placeholder.com/40" alt="logo1" />
          <img src="https://via.placeholder.com/40" alt="logo2" />
          <img src="https://via.placeholder.com/40" alt="logo3" />
          <img src="https://via.placeholder.com/40" alt="logo4" />
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;

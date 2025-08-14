// src/components/Work.jsx
import React, { useState } from 'react';
import './Work.css'; // Extra custom spacing adjustments


const cardsData = [
  { id: 1, title: 'Engagement Ceremony', img: 'https://images.unsplash.com/photo-1' },
  { id: 2, title: 'Pre-Wedding Shoots Arrangement', img: 'https://images.unsplash.com/photo-2' },
  { id: 3, title: 'Haldi Ceremony', img: 'https://images.unsplash.com/photo-3' },
  { id: 4, title: 'Sangeet Ceremony', img: 'https://images.unsplash.com/photo-4' },
  { id: 5, title: 'Reception', img: 'https://images.unsplash.com/photo-5' },
  { id: 6, title: 'Mehendi Ceremony', img: 'https://images.unsplash.com/photo-6' },
  { id: 7, title: 'Wedding Ceremony', img: 'https://images.unsplash.com/photo-7' },
  { id: 8, title: 'Post Wedding Shoot', img: 'https://images.unsplash.com/photo-8' },
  // Add more cards if needed
];

const Work = () => {
  const [showAll, setShowAll] = useState(false);

   // Show 6 cards by default, else show all
  const cardsToShow = showAll ? cardsData : cardsData.slice(0, 6);


  return (
     <section id="work" className="py-5">
      <div className="container py-4" style={{ backgroundColor: '#c67a85' }}>
        <h3 className="text-center mb-4" style={{ color: '#2c2c2c' }}>
          Our Services
        </h3>

        <div className="row g-4 justify-content-center">
          {cardsToShow.map(card => (
            <div
              key={card.id}
              className="col-12 col-sm-6 col-md-4"
            >
              <div className="card h-100 work-card">
                <img
                  src={card.img}
                  className="card-img-top"
                  alt={card.title}
                  style={{ borderRadius: '0 0 10px 10px', height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body bg-danger text-center text-dark fw-bold"style={{ borderRadius: '5px' }}>
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {cardsData.length > 6 && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-light"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'View Less Work' : 'View More Work'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;

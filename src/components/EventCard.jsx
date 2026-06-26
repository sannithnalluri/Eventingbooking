import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EventCard = ({
  id,
  date,
  month,
  category,
  title,
  location,
  price,
  image,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/event/${id}`, {
      state: {
        id,
        date,
        month,
        category,
        title,
        location,
        price,
        image,
      },
    });
  };

  return (
    <motion.div
      className="event-card"
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 17,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-img" />

        <div className="card-date-badge">
          <span className="date-day">{date}</span>
          <span className="date-month">{month}</span>
        </div>
      </div>

      <div className="card-content">
        <span className="card-category">{category}</span>

        <h4 className="card-title">{title}</h4>

        <p className="card-location">📍 {location}</p>

        <div className="card-footer">
          <span className="card-price">₹{price}</span>

          <div className="card-action-row">
            <button
              className="book-inline-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
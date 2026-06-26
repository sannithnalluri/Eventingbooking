import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EventCard from './EventCard';

import sunburnImg from '../assets/hero.png';
import iplImg from '../assets/hero.png';
import comedyImg from '../assets/hero.png';
import holiImg from '../assets/hero.png';

const TopEvents = ({ showAll, setShowAll }) => {
  // Extended dataset
  const initialEvents = [
    { id: 1, date: "25", month: "MAY", category: "Music", title: "Sunburn Arena 2024", location: "Mumbai, India", price: "1,499", image: sunburnImg },
    { id: 2, date: "08", month: "JUN", category: "Sports", title: "IPL Final Match", location: "Ahmedabad, India", price: "3,999", image: iplImg },
    { id: 3, date: "15", month: "JUN", category: "Comedy", title: "Stand-up Comedy Show", location: "Bengaluru, India", price: "799", image: comedyImg },
    { id: 4, date: "22", month: "JUN", category: "Festival", title: "Holi Festival 2024", location: "Mathura, India", price: "499", image: holiImg }
  ];

  const extraEvents = [
    { id: 5, date: "29", month: "JUN", category: "Music", title: "DJ Snake Live", location: "Goa, India", price: "2,499", image: sunburnImg },
    { id: 6, date: "04", month: "JUL", category: "Sports", title: "Pro Kabaddi Opener", location: "Delhi, India", price: "899", image: iplImg },
    { id: 7, date: "12", month: "JUL", category: "Comedy", title: "Comicstaan Night", location: "Hyderabad, India", price: "600", image: comedyImg },
    { id: 8, date: "18", month: "JUL", category: "Festival", title: "EID Food Carnival", location: "Lucknow, India", price: "299", image: holiImg }
  ];

  const visibleEvents = showAll ? [...initialEvents, ...extraEvents] : initialEvents;

  return (
    <section className="top-events-section">
      <div className="section-header">
        <div className="section-title-left">
          <span className="star-icon">✦</span>
          <h2>Top Events</h2>
          <button 
            className="btn-view-all" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All Events →"}
          </button>
        </div>
      
      </div>

      {/* layout prop on motion.div handles automatic smooth structural layout restructuring */}
      <motion.div className="events-grid" layout>
        <AnimatePresence>
          {visibleEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default TopEvents;
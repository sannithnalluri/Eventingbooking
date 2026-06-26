import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import TopEvents from "../TopEvents";
import StatsBar from "../StatsBar/StatsBar";
import FeaturesAndCTA from "../StatsBar/FeaturesAndCTA";
import Footer from "../Footer/Footer";


const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const eventsSectionRef = useRef(null);

  const handleExploreAll = () => {
    setShowAll(true);

    setTimeout(() => {
      eventsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="app-container">
 

      <Hero onExploreClick={handleExploreAll} />

      <div ref={eventsSectionRef}>
        <TopEvents
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </div>

      <StatsBar />

      <FeaturesAndCTA />

      <Footer />
    </div>
  );
};

export default Home;
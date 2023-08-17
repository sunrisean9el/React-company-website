import React from "react";
import ServiceBox from "./ServiceBox";

const Offer = () => {
  return (
    <section id="offer" className="offer">
      <div className="offer-container container">
        <h2 className="offer-title">Czym zajmuje się nasza firma?</h2>
        <div className="service">
          <ServiceBox />
        </div>
      </div>
    </section>
  );
};

export default Offer;

import React from "react";
import Card from "./card";

function Services() {
  const numberOfCards = 12;

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numberOfCards; i++) {
      cards.push(<Card key={i} />);
    }
    return cards;
  };

  return (
    <div className="container-fluid mx-5" id="box3">
      <h1 className="text-center">SERVICES</h1>
      <div className="row">{renderCards()}</div>
    </div>
  );
}

export default Services;

import React from 'react';
import './FoodSection.scss';

function FoodSection(props) {
  return (
    <section className="food-section">
      <div className="food-section__container">
        <h1 className="food-section__heading">{props.heading}</h1>
      </div>
    </section>
  );
}

export default FoodSection;

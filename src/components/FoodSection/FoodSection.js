import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodSection.scss';

function FoodSection(props) {
  return (
    <section className="food-section">
      <div className="food-section__container">
        <h1 className="food-section__heading">{props.heading}</h1>
        <div className="food-section__items">
          {props.items.map((item) => (
            <FoodItem key={item.id} classMix="food-section__item" {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodSection;

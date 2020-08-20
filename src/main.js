import './scss/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FoodSection from './components/FoodSection/FoodSection';

ReactDOM.render(
  <FoodSection heading="Ты сегодня покормил кота?" />,
  document.getElementById('root')
);

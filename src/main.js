import './scss/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FoodSection from './components/FoodSection/FoodSection';

const catFood = [
  {
    title: 'Нямушка',
    taste: 'с фуа-гра',
    madeOf: 'Печень утки разварная с артишоками.',
    weight: 0.5,
    available: true,
    selected: false
  },
  {
    title: 'Нямушка',
    taste: 'с рыбой',
    madeOf: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    weight: 2,
    available: true,
    selected: true
  },
  {
    title: 'Нямушка',
    taste: 'с курой',
    madeOf: 'Филе из цыплят с трюфелями в бульоне.',
    weight: 5,
    available: false,
    selected: false
  }
];

ReactDOM.render(
  <FoodSection heading="Ты сегодня покормил кота?" items={catFood} />,
  document.getElementById('root')
);

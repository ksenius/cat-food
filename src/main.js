import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
  <App foodItems={catFood} />,
  document.getElementById('root')
);

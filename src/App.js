import React from 'react';
import './scss/global.scss';
import FoodSection from './components/FoodSection/FoodSection';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div>
      <main>
        <FoodSection
          heading="Ты сегодня покормил кота?"
          items={props.foodItems}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

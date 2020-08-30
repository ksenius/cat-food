import React from 'react';
import './scss/global.scss';
import FoodSection from './components/FoodSection/FoodSection';
import Footer from './components/Footer/Footer';
import data from './data.json';

function App() {
  return (
    <div>
      <main>
        <FoodSection
          heading={data.foodSection.heading}
          items={data.foodItems}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

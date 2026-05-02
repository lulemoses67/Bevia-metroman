import React, { useState } from 'react';
import Hero from '../componets/Hero';
import Product from './Product';
import Clothings from '../componets/Clothings';

const Home = () => {
  // 1. Define state to track which component to show
  const [view, setView] = useState('perfumes');

  return (
    <>
      <Hero bgimg="https://images.pexels.com/photos/34143829/pexels-photo-34143829.jpeg" title="Welcome to Brevia, where we believe a scent is more than just a fragrance" body="it is a signature of your identity"/>
      <br />
      
      <div className="btn-group">
        {/* 2. Update state on click */}
        <button 
          className={`btn-outline ${view === 'perfumes' ? 'active' : ''}`} 
          onClick={() => setView('perfumes')}
        >
          Perfumes
        </button>
        <button 
          className={`btn-outline ${view === 'clothings' ? 'active' : ''}`} 
          onClick={() => setView('clothings')}
        >
          Men Clothings
        </button>
      </div>

      {/* 3. Conditionally render the components */}
      {view === 'perfumes' ? <Product /> : <Clothings />}
    </>
  );
}

export default Home;

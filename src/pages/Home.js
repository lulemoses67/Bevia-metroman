import React, { useState } from 'react';
import Hero from '../componets/Hero';
import Product from './Product';
import Clothings from '../componets/Clothings';

const Home = () => {
  // 1. Define state to track which component to show
  const [view, setView] = useState('perfumes');

  return (
    <>
      <Hero bgimg="https://images.pexels.com/photos/33295344/pexels-photo-33295344.jpeg" title="Designer Perfumes & Men's Fashion in Uganda" body="Welcome to Brevia-Metroman, where we believe a scent is more than just a fragrance—it is a signature of your identity. Shop premium scents and stylish clothing with fast delivery in Kampala, Masaka, and Mbarara."/>
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

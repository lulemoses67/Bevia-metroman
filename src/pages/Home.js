import React from 'react';
import Hero from '../componets/Hero';
import Product from './Product';

const Home = () => {
    return (
        <>
            <Hero bgimg="https://images.pexels.com/photos/34143829/pexels-photo-34143829.jpeg" title="Welcome to Brevia, where we believe a scent is more than just a fragrance" body="it is a signature of your identity"/>
            <Product/>
        </>
    );
}

export default Home;

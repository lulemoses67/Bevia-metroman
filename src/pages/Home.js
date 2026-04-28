import React from 'react';
import Hero from '../componets/Hero';
import Section from '../componets/Section';
import ProductCard from '../componets/ProductCard';

const Home = () => {
    return (
        <>
            <Hero bgimg="https://images.pexels.com/photos/34143829/pexels-photo-34143829.jpeg" title="Smell like a champion" body="Fresh and Attractive"/>
            <Section title="Best Selling Perfumes" info="100% smell nice awesome">
                <div className="row">
                    <div className="col-lg-4">
                        <ProductCard />
                    </div>
                </div>
            </Section>
            <Section title="Best Men Perfumes" info="100% smell nice awesome">
                <div className="row">
                    <div className="col-lg-4">
                        <ProductCard />
                    </div>
                </div>
            </Section>
            <Section title="Best Female Perfumes" info="100% smell nice awesome">
                <div className="row">
                    <div className="col-lg-4">
                        <ProductCard />
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Home;

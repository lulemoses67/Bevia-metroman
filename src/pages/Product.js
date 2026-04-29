import React from 'react';
import Page from '../componets/Page';
import Section from '../componets/Section';
import ProductCard from '../componets/ProductCard';

const Product = () => {
    return (
        <>
            <Page title={'Our Products'} info={'Check out th best fragrances and Best male fashion'} >
                <div className="btn-group">
                    <button className="btn-outline">Perfumes</button>
                    <button className="btn-outline">Men Clothings</button>
                </div>
                <Section title={'Perfumes'} info={'All perfumes in stock'} >
                    <div className="row">
                        <div className="col-lg-4">
                            <ProductCard />
                        </div>
                    </div>
                </Section>
            </Page>
        </>
    );
}

export default Product;

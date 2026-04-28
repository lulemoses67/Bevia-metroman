import React from 'react';

const ProductCard = () => {
    return (
        <div className='product_card'>
            <img src="https://images.pexels.com/photos/9202848/pexels-photo-9202848.jpeg" alt="perfume" />
            <h4>Black Opium</h4>
            <p>36000 ugx</p>
            <p><small>Available</small></p>
            <div className="btn-group">
                <a href="/" className="btn-outline">Buy</a>
            </div>
        </div>
    );
}

export default ProductCard;

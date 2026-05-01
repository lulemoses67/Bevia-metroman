import React from 'react';

const ProductCard = ({ itm, onAddItem }) => {
    return (
        <div className='product_card'>
            <img src="https://images.pexels.com/photos/9202848/pexels-photo-9202848.jpeg" alt="perfume" />
            <h4>{itm.name}</h4>
            <p>{itm.price}</p>
            <p><small>Available</small></p>
            <div className="btn-group">
                <button onClick={() => onAddItem(itm)} className="btn-outline">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;

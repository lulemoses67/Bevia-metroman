import React from 'react';

const ProductCard = ({ itm, onAddItem }) => {
    return (
        <div className='product_card'>
            <img src={itm.imgUrl} alt={itm.name} />
            <h4>{itm.name}</h4>
            <p>{itm.price} UGX</p>
            <p><small>{itm.description}</small></p>
            <button onClick={() => onAddItem(itm)} className="btn-success">Add to Cart</button>
        </div>
    );
}

export default ProductCard;

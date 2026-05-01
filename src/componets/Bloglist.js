import React from 'react';
import ProductCard from './ProductCard';

const Bloglist = (props) => {
    return (
        <>
            <div className="row">
                {props.products.map(item => (
                    <div className="col-lg-4" key={item.id}>
                        <ProductCard itm={item} onAddItem={props.myFunc}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Bloglist;

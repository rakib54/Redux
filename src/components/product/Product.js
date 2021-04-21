import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;
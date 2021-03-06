import React from 'react';

const Product = (props) => {

    const { addToCart, product } = props
    return (
        <div>
            <h2>{product.name}</h2>
            <button
                onClick={() => addToCart(product.id, product.name)}
            >Add to cart</button>
        </div>
    );
};

export default Product;
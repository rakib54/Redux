import React from 'react';
import Product from '../product/Product';


const products = [
    { id: 1, name: 'HP Laptop' },
    { id: 2, name: 'Samsung mobile' },
    { id: 3, name: 'Asus Laptop' },
    { id: 4, name: 'Apple Mac book' },
    { id: 5, name: 'Dell Laptop' }
]

const Shop = () => {
    return (
        <div>
            <h2>This is shop</h2>
            {
                products.map(product =><Product product ={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Shop;
import React from 'react';
import Product from '../product/Product';
import {addToCart} from '../../Redux/Actions/cartAction'
import { connect } from 'react-redux';


const Shop = (props) => {
    console.log(props);
    const {products,addToCart} = props
    return (
        <div>
            <h2>This is shop</h2>
            {
                products.map(product => <Product addToCart={addToCart} product={product} key={product.id}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}


export default connect(mapStateToProps ,mapDispatchToProps)(Shop);
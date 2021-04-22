import React from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../../Redux/Actions/cartAction';

const Cart = (props) => {
    console.log(props);
    const {cart,removeCart} = props
    return (
        <div>
            <h1>This is Cart</h1>
            <ul>
                {
                    cart.map(pd =><li key={pd.cartId}>{pd.name}
                    <button onClick={()=>removeCart(pd.cartId)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart : state.cart
    }
}

const mapDispatchToProp ={
    removeCart : removeCart
}

export default connect(mapStateToProps,mapDispatchToProp)(Cart) ;
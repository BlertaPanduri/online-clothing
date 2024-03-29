import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import {withRouter} from 'react-router-dom';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item';


/** Lista ku regjistrohen artikujt qe i zgjedhim */

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
           {
            cartItems.length ?  (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
           ))
            ): ( 
            <span className='empty-message' >Your cart is empty </span>
            )}
        </div>
        <CustomButton onClick={()=> history.push('/checkout')}> GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = ({ cart: {cartItems}}) => ({
    cartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));
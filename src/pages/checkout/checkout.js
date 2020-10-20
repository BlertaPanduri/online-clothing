import React from 'react';
import {connect} from 'react-redux';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import {createStructuredSelector} from 'reselect';
import{selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=> 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>
            TOTAL: ${total}
        </div>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
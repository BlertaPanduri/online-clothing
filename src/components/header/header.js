import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
/** Menyja per navigim */
const Header = ({currentUser, hidden}) => (
<div className='header'>
    <Link to='/'>
        <Logo className='logo'/>
    </Link>
    <div className="options">
    <div className='option'>
    <Link to='/shop'>
       SHOP
    </Link>
    </div>
  
{
    currentUser ?
    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
    :
    <Link className ='option' to='/signin'>SIGN IN</Link>
}
<CartIcon/>
</div>
{
hidden ? null :
<CartDropdown/>
}
</div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
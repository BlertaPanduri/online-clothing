import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

/** lidhen krejt reducers */
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})
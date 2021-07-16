import { combineReducers } from 'redux';
import CartReducers from './cart/cart.reducers';
import UserReducers from './user/user.reducers';

const rootReducer = combineReducers({
	cart: CartReducers,
	user: UserReducers,
});

export default rootReducer;

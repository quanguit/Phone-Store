import CartTypes from './cart.types';
import { addItemToCart, removeCartItem } from './cart.utils';

const INITIAL_STATE = {
	hidden: false,
	cartItems: [],
};

const CartReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeCartItem(state.cartItems, action.payload),
			};
		case CartTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case CartTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default CartReducers;

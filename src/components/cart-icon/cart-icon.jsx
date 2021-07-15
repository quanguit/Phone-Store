import React, { useState, useEffect } from 'react';
import './cart-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		const qty = cartItems.map((cartItem) => cartItem);
		setQuantity(qty.length);
	}, [cartItems]);

	return (
		<div
			className="cart-icon"
			onClick={() => {
				dispatch(toggleCartHidden());
			}}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{quantity}</span>
		</div>
	);
};

export default CartIcon;

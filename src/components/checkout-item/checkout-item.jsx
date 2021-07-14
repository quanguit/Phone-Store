import React, { useEffect, useState } from 'react';
import './checkout-item.scss';
import { useDispatch } from 'react-redux';
import {
	addItem,
	removeItem,
	clearItemFromCart,
} from '../../redux/cart/cart.action.js';

const CheckoutItem = ({ cartItem }) => {
	const { imageUrl, name, quantity } = cartItem;
	const dispatch = useDispatch();
	const [price, setPrice] = useState(0);

	useEffect(() => {
		let price = cartItem.price * cartItem.quantity;
		setPrice(price);
	}, [quantity]);

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={() => dispatch(clearItemFromCart(cartItem))}
			>
				&#10005;
			</div>
		</div>
	);
};
export default CheckoutItem;

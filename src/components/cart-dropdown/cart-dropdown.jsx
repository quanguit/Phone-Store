import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from '../cart-item/cart-item';

const CartDropdown = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItems key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECK
			</CustomButton>
		</div>
	);
};

export default withRouter(CartDropdown);

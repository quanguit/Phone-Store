import React, { useEffect, useState } from 'react';
import './checkoutpage.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const currentUser = useSelector((state) => state.user.currentUser);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let price = 0;
		cartItems.map((cartItem) => (price += cartItem.price * cartItem.quantity));
		setTotalPrice(price);
	}, [cartItems]);

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">TOTAL: ${totalPrice}</div>
			{totalPrice ? (
				<div className="stripe">
					<StripeCheckoutButton
						totalPrice={totalPrice}
						currentUser={currentUser}
					/>
				</div>
			) : null}
			<div className="test-warning">
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</div>
		</div>
	);
};

export default CheckoutPage;

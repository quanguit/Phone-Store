import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../redux/cart/cart.action';

const StripeCheckoutButton = ({ totalPrice }) => {
	const dispatch = useDispatch();
	const priceForStripe = totalPrice * 100;
	const publishableKey =
		'pk_test_51HwK6lI1XWSkPuvU1Qa0AfNlpSwiskH1hAgaalPmJo07gHhnLcIpYxatwwa73lkM4TXUfmuLUkvMNtSIeUu7iEJw00TlThGNQN';

	const onToken = (token) => {
		console.log(token);
		alert('Payment successful');
		dispatch(clearCart());
	};

	return (
		<StripeCheckout
			label="Pay now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${totalPrice}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

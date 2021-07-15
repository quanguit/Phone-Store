import React from 'react';
import './stripe-button.scss';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ totalPrice, currentUser }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const priceForStripe = totalPrice * 100;
	const publishableKey =
		'pk_test_51HwK6lI1XWSkPuvU1Qa0AfNlpSwiskH1hAgaalPmJo07gHhnLcIpYxatwwa73lkM4TXUfmuLUkvMNtSIeUu7iEJw00TlThGNQN';

	const onToken = (token) => {
		console.log(token);
		alert('Payment successful');
		dispatch(clearCart());
	};

	if (currentUser) {
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
				// currency="VND"
			>
				<button className="pay-button">Pay now</button>
			</StripeCheckout>
		);
	} else {
		return (
			<button className="pay-button" onClick={() => history.push('/signin')}>
				Pay now
			</button>
		);
	}
};

export default withRouter(StripeCheckoutButton);

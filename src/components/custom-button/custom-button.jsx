import React from 'react';
import './custom-button.scss';

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${
			isGoogleSignIn ? 'google-sign-in' : ''
		} custom-button`}
		{...otherProps}
	>
		{/* children ở đây là chữ của nút */}
		{children}
	</button>
);

export default CustomButton;

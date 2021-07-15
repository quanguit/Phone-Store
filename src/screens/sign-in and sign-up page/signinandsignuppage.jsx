import React from 'react';
import './signinandsignupage.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInandSignUpPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};
export default SignInandSignUpPage;

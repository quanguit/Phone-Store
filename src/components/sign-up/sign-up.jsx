import React, { useState } from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { useDispatch } from 'react-redux';
import { signUpWithEmail } from '../../redux/user/user.actions';

const SignUp = () => {
	const [user, setUser] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const dispatch = useDispatch();

	const { displayName, email, password, confirmPassword } = user;

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			signUpWithEmail({ email, password, displayName, confirmPassword })
		);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					handleChange={handleChange}
					label="User Name"
					required
				/>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">Sign up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;

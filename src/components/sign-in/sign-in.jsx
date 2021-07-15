import React, { useState } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { signInWithEmail } from '../../redux/user/user.actions';

const SignIn = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
	const dispatch = useDispatch();

	const { email, password } = user;

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(signInWithEmail({ email, password }));
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setUser({ ...user, [name]: value });
	};

	const resetPassword = () => {
		if (email !== '') {
			auth
				.sendPasswordResetEmail(email)
				.then(() => {
					setEmailHasBeenSent(true);
					setTimeout(() => {
						setEmailHasBeenSent(false);
						alert('Sent back your passord');
					}, 3000);
				})
				.catch(() => {
					alert("Your email hasn't been signed up");
				});
		} else {
			alert("You haven't filled your email!");
		}
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
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
				<span className="forgot-email" onClick={resetPassword}>
					Forgot Password?
				</span>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

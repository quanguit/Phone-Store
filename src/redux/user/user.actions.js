import UserTypes from './user.types.js';
import {
	generateUserDocument,
	auth,
} from '../../components/firebase/firebase.js';

export const setCurrentUser = (user) => ({
	type: UserTypes.SET_CURRENT_USER,
	payload: user,
});

export const signInWithEmail = ({ email, password }) => {
	return async (dispatch) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
			dispatch({ type: UserTypes.SIGN_IN_SUCCESS, payload: false });
		} catch (error) {
			alert(`${error.message}`);
			dispatch({ type: UserTypes.SIGN_IN_FAILURE, payload: true });
		}
	};
};

export const signUpWithEmail = ({
	email,
	password,
	displayName,
	confirmPassword,
}) => {
	return async (dispatch) => {
		try {
			if (password !== confirmPassword) {
				alert("Password don't match");
				return;
			}
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			generateUserDocument(user, { displayName });
			dispatch({ type: UserTypes.SIGN_UP_SUCCESS, payload: false });
		} catch (error) {
			alert(`${error.message}`);
			dispatch({ type: UserTypes.SIGN_UP_FAILURE, payload: true });
		}
	};
};

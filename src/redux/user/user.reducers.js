import UserTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: false,
};

const UserReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case UserTypes.SIGN_IN_SUCCESS:
		case UserTypes.SIGN_UP_SUCCESS: {
			return {
				...state,
				error: action.payload,
			};
		}
		case UserTypes.SIGN_IN_FAILURE:
		case UserTypes.SIGN_UP_FAILURE: {
			return {
				...state,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export default UserReducers;

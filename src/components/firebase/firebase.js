import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyDk8DIpG5zCCgt9AfmatFl550e0bSRVp0Q',
	authDomain: 'technology-de572.firebaseapp.com',
	projectId: 'technology-de572',
	storageBucket: 'technology-de572.appspot.com',
	messagingSenderId: '1030139484926',
	appId: '1:1030139484926:web:6f3b1f6e6317d60d2ce3af',
	measurementId: 'G-Q3BRYEFNL1',
};

export const generateUserDocument = async (user, additionalData) => {
	if (!user) return;

	const userRef = firestore.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { email, displayName } = user;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.error('Error creating user document', error);
		}
	}
	return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
	if (!uid) return null;

	try {
		const userDocument = await firestore.doc(`users/${uid}`).get();
		return {
			id: uid,
			...userDocument.data(),
		};
	} catch (error) {
		console.error('Error fetching user', error);
	}
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google sign in
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

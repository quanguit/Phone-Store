import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyBsbTQnlM3CYQQUUa__sE-ls-EaDzliWiw',
	authDomain: 'technologies-f51da.firebaseapp.com',
	projectId: 'technologies-f51da',
	storageBucket: 'technologies-f51da.appspot.com',
	messagingSenderId: '521874360721',
	appId: '1:521874360721:web:3f04025e93bdb789e83230',
	measurementId: 'G-W7KRSSPLNC',
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

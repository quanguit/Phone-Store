import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './screens/homepage/homepage';
import ContactPage from './screens/contactspage/contactpage';
import ShopPage from './screens/shoppage/shoppage';
import CollectionPage from './screens/collectionpage/collectionpage';
import CheckoutPage from './screens/checkoutpage/checkoutpage';
import SignInandSignUpPage from './screens/sign-in and sign-up page/signinandsignuppage';
import { auth, generateUserDocument } from './components/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const App = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			const user = await generateUserDocument(userAuth);
			dispatch(setCurrentUser(user));
		});
	}, []);

	// console.log(currentUser);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/checkout" component={CheckoutPage} />
				<Route exact path="/signin">
					{currentUser ? <Redirect to="/" /> : <SignInandSignUpPage />}
				</Route>
				<Route path="/:collectionName" component={CollectionPage} />
			</Switch>
		</div>
	);
};

export default App;

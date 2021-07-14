import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './screens/homepage/homepage';
import ContactPage from './screens/contactspage/contactpage';
import ShopPage from './screens/shoppage/shoppage';
import CollectionPage from './screens/collectionpage/collectionpage';
import CheckoutPage from './screens/checkoutpage/checkoutpage';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/checkout" component={CheckoutPage} />	
				<Route path="/:collectionName" component={CollectionPage} />
			</Switch>
		</div>
	);
};

export default App;

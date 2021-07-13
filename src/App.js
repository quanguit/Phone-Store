import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import HomePage from './screens/homepage/homepage';
import ContactPage from './screens/contactspage/contactpage';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/contact" component={ContactPage} />
			</Switch>
		</div>
	);
};

export default App;

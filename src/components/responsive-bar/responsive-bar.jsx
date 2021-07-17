import React from 'react';
import './responsive-bar.scss';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const ResponsiveBar = ({ currentUser }) => {
	return (
		<div className="res-bar">
			<Link className="res-link" to="/">
				SHOP
			</Link>
			<Link className="res-link" to="/shop">
				ALL COLLECTIONS
			</Link>
			<Link className="res-link" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="res-link" to="/" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="res-link" to="/signin">
					SIGN IN
				</Link>
			)}
			<Link className="res-link" to="/checkout">
				CHECKOUT
			</Link>
		</div>
	);
};

export default ResponsiveBar;

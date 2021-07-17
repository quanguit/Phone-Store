import React, { useState } from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/apple.svg';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebase';
import { FaBars } from 'react-icons/fa';
import ResponsiveBar from '../responsive-bar/responsive-bar';

const Header = () => {
	const hidden = useSelector((state) => state.cart.hidden);
	const currentUser = useSelector((state) => state.user.currentUser);
	const [showBar, setShowBar] = useState(false);

	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="bar">
				<FaBars size={30} onClick={() => setShowBar(!showBar)} />
			</div>
			{showBar ? <ResponsiveBar currentUser={currentUser} /> : ''}
			<div className="options">
				<Link className="option" to="/">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					ALL COLLECTIONS
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" to="/" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

export default Header;

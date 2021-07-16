import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/apple.svg';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebase';

const Header = () => {
	const hidden = useSelector((state) => state.cart.hidden);
	const currentUser = useSelector((state) => state.user.currentUser);

	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
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

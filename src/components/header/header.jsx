import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { useSelector } from 'react-redux';

const Header = () => {
	const hidden = useSelector((state) => state.cart.hidden);

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
				<div className="option" to="/signin">
					SIGN IN
				</div>
				<CartIcon />
			</div>
			{hidden ? <CartDropdown /> : ''}
		</div>
	);
};

export default Header;

import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.action';
import { useDispatch } from 'react-redux';

const CollectionItem = ({ item, flag }) => {
	const { name, price, imageUrl } = item;
	const dispatch = useDispatch();

	return (
		<div className={`collection-item ${flag ? 'flag' : ''}`}>
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton
				onClick={() => {
					dispatch(addItem(item));
				}}
				inverted
			>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;

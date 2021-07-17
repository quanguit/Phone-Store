import React, { useState } from 'react';
import './collectionpage.scss';
import { useLocation } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = ({ match }) => {
	// const path = match.params.collectionName;
	const location = useLocation();
	const [items, setItems] = useState(location.state.items);

	return (
		<div className="collection-container">
			{items.map((item) => (
				<CollectionItem key={item.id} item={item} flag />
			))}
		</div>
	);
};
export default CollectionPage;

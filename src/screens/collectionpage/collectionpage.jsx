import React, { useState } from 'react';
import './collectionpage.scss';
import { useLocation, withRouter } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = ({ match }) => {
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
export default withRouter(CollectionPage);

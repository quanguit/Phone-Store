import React, { useState } from 'react';
import './collectionpage.scss';
import { withRouter } from 'react-router-dom';
import { SHOP_DATA } from '../shop.data';
import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = ({ match }) => {
	const [title, setTitle] = useState(match.params.collectionName);
	const [collections, setCollections] = useState(SHOP_DATA);
	const [array, setArray] = useState([]);
	const filteredCategory = collections.filter(
		(col) => col.title.toLowerCase() === title.toLowerCase()
	);
	filteredCategory[0].items.map((item) => array.push(item));
	console.log(array);

	return (
		<div className="collection-container">
			{array.map((item) => (
				<CollectionItem key={item.id} item={item} flag />
			))}
		</div>
	);
};
export default withRouter(CollectionPage);

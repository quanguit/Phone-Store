import React, { useState, useEffect } from 'react';
import './shoppage.scss';
import SearchField from 'react-search-field';
import { firestore } from '../../components/firebase/firebase';
import CollectionItem from '../../components/collection-item/collection-item';
import Spinner from '../../components/spinner/spinner';

const ShopPage = () => {
	const [items, setItems] = useState([]);
	const [collections, setCollections] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchCollections = async () => {
			const fetchCol = await firestore.collection('shopdata').get();
			const col = fetchCol.docs.map((a) => a.data());
			setCollections(col);
			setLoading(false);
		};
		fetchCollections();
	}, []);

	const transform = () => {
		collections.map((col) => col.items.map((item) => items.push(item)));
	};

	if (items.length === 0) {
		transform();
	}

	const onChangeText = (e) => {
		setSearchQuery(e);
	};

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<div>
					<div className="title-container">
						<h1 className="title">ALL COLLECTIONS</h1>
						<SearchField
							placeholder="Type to search..."
							onChange={onChangeText}
							classNames="search-bar"
						/>
					</div>
					<div className="shop">
						{filteredItems.map((item, index) => (
							<CollectionItem key={item.id} item={item} flag />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ShopPage;

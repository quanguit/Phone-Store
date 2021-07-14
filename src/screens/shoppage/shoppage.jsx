import React, { useState } from 'react';
import './shoppage.scss';
import { SHOP_DATA } from '../shop.data';
import SearchField from 'react-search-field';
import CollectionItem from '../../components/collection-item/collection-item';

const ShopPage = () => {
	const [category, setCategory] = useState(SHOP_DATA);
	const [searchQuery, setSearchQuery] = useState('');
	const [items, setItems] = useState([]);

	const transform = () => {
		category.map((col) => col.items.map((item) => items.push(item)));
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
			<div className="title-container">
				<h1 className="title">ALL COLLECTIONS</h1>
				<SearchField
					placeholder="Search..."
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
	);
};

export default ShopPage;

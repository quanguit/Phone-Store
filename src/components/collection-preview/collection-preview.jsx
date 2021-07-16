import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
import { useHistory, withRouter } from 'react-router-dom';

const CollectionPreview = ({ name, items, match }) => {
	const history = useHistory();
	// console.log(history);
	// console.log(match);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="collection-preview">
			<h1
				className="title"
				onClick={() => {
					scrollToTop();
					history.push(`/${name}`, { items });
				}}
			>
				{name.toUpperCase()}
			</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreview);

import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
import { useHistory, withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, match }) => {
	const history = useHistory();
	// console.log(history);
	// console.log(match);
	return (
		<div className="collection-preview">
			<h1 className="title" onClick={() => history.push(`/${title}`)}>
				{title.toUpperCase()}
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

import React, { useEffect, useState } from 'react';
import './homepage.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { firestore } from '../../components/firebase/firebase';

const HomePage = () => {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		const fetchCollections = async () => {
			const fetchCol = await firestore.collection('shopdata').get();
			const col = fetchCol.docs.map((a) => a.data());
			setCollections(col);
		};
		fetchCollections();
	}, []);

	return (
		<div className="container">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default HomePage;

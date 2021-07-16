import React, { useEffect, useState } from 'react';
import './homepage.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { firestore } from '../../components/firebase/firebase';
import Spinner from '../../components/spinner/spinner';

const HomePage = () => {
	const [collections, setCollections] = useState([]);
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

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<div className="container">
					{collections.map(({ id, ...otherCollectionProps }) => (
						<CollectionPreview key={id} {...otherCollectionProps} />
					))}
				</div>
			)}
		</div>
	);
};

export default HomePage;

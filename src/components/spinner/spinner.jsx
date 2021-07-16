import React from 'react';
import './spinner.scss';
import Loader from 'react-loader-spinner';

const Spinner = () => (
	<div className="spinner-overlay">
		<Loader
			type="Oval"
			color="#787A91"
			height={70}
			width={70}
			timeout={3000} //3 secs
		/>
	</div>
);

export default Spinner;

import React from 'react';
import SearchInput from '../components/SearchInput';

const SearchPage = () => {
	return (
		<div className="SearchPage">
			<img
				id="logo"
				src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/logo/png/skiddle-logo-white-landscape.png"
				alt="logo"
			/>
			<SearchInput />
		</div>
	);
};

export default SearchPage;

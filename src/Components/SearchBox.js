import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className ='pa2'>
			<input 
			className = 'pa3 ba br4 bg-light-pink  '
			type= 'search' 
			placeholder= 'Looking for a Robot?' 
			onChange = {searchChange}/>
		</div>
	);
}



export default SearchBox;
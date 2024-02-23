import React from 'react';


const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '2px solid black', height: '800px'}}>
			{props.children}
		</div> //Creates a scrollable search component at top 
	);
};


export default Scroll;

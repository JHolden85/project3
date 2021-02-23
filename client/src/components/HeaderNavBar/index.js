// HeaderNavBar.js

import React from 'react';
import './style.css';
import tree from '../../Assets/tree.png';

const HeaderNavBar = () => {
	return (
		<div className="flex Header">
			<a className="link" id="navlink" href="/">
				<img src={tree} alt=""></img> <span id="navtexts">Parc-It</span>
			</a>
		</div>
	);
};

export default HeaderNavBar;

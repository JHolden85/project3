// HeaderNavBar.js

import React from 'react';
import './style.css';
import tree from '../../Assets/tree.png';
import API from '../../utils/API';

const HeaderNavBar = ({ username }) => {
	return (
		<div className="flex Header">
			<a className="link" id="navlink" href="/">
				<img src={tree} alt=""></img>
				<span className="woodlistFont" id="navtexts">
					Parc-It
				</span>
			</a>

			<h3 className="hello">Hello {username}</h3>
		</div>
	);
};

export default HeaderNavBar;

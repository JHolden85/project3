// FooterNavBar.js

import React from 'react';
import './style.css';

const FooterNavBar = () => {
	return (
		<footer className="Footer">
			<a href="/" className="footerBtn">
				Parks
			</a>
			<a href="/team" className="footerBtn">
				My Teams
			</a>
			<a href="/profile" className="footerBtn">
				Profile
			</a>
		</footer>
	);
};

export default FooterNavBar;

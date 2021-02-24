// FooterNavBar.js

import React from 'react';
import './style.css';

const FooterNavBar = () => {
	return (
		<footer className="Footer">
			<a href="/" className="footerBtn link">
				Parks
			</a>
			<a href="/team" className="footerBtn link">
				My Teams
			</a>
			<a href="/profile" className="footerBtn link">
				Profile
			</a>
		</footer>
	);
};

export default FooterNavBar;

// FooterNavBar.js

import React from 'react';
import './style.css';
import API from '../../utils/API';

const FooterNavBar = ({ username }) => {
	const handleLogout = () => {
		API.logout().then((data) => {
			window.location.replace('/user/login');
		});
	};

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
			<button className="footerBtn link" onClick={handleLogout}>
				Log Out
			</button>
		</footer>
	);
};
export default FooterNavBar;

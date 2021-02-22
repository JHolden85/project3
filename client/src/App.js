import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maps from './pages/Maps';
import FourOFour from './pages/NotFound';
import Auth from './pages/LoginSignup';
import TeamPage from './pages/TeamPage';
import './App.css';
import HeaderNavBar from './components/HeaderNavBar';
import FooterNavBar from './components/FooterNavBar';

function App() {
	return (
		<div>
			<HeaderNavBar />
			<Router>
				<Switch>
					<Route exact path="/" component={Maps} />
					<Route exact path="/Maps" component={Maps} />
					<Route exact path="/user/login" component={Auth} />
					<Route exact path="/team" component={TeamPage} />
					<Route path="*" component={FourOFour} />
				</Switch>
			</Router>
			<FooterNavBar />
		</div>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maps from './pages/Maps';
import FourOFour from './pages/NotFound';
import Auth from './pages/LoginSignup';
import TeamPage from './pages/TeamPage';
// import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/Maps" component={Maps} />
				<Route exact path="/user/login" component={Auth} />
				<Route exact path="/team" component={TeamPage} />
				<Route path="*" component={FourOFour} />
			</Switch>
		</Router>
	);
}

export default App;

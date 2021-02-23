import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maps from './pages/Maps';
import FourOFour from './pages/NotFound';
import Auth from './pages/LoginSignup';
import TeamPage from './pages/TeamPage';
import SinglePark from './pages/SingleParkPage';
// import logo from './logo.svg';
import './App.css';
import HeaderNavBar from './components/HeaderNavBar';
import FooterNavBar from './components/FooterNavBar';

function App() {
	const [activePark, setActivePark] = useState({})
	return (

		<Router>
			<Switch>
				<Route exact path="/Maps" >
					<Maps setPark={setActivePark}/>
				</Route>
				<Route exact path="/" component={Auth} />
				<Route exact path="/team" component={TeamPage} />
				<Route exact path="/park/:id">
					<SinglePark {...activePark}/>
				</Route>

				<Route path="*" component={FourOFour} />
			</Switch>
		</Router>

	);
}

export default App;

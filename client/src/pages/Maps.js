import React, { Component, useState } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import MapResults from '../components/mapResults';

class Maps extends Component {
	state = {
		icon: '',
		name: '',
		vicinity: '',
	};
	// Make sure the function is called on page load
	componentDidMount() {
		// function to call the axios request and get the data
		API.getGoogleMap('33.771713,-118.18131', 1500, 'park')
			.then((res) => {
				console.log('getGoogleMap ' + res);
				this.setState({
					icon: res.data.results,
					name: res.data.results,
					vicinity: res.data.results,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<Container style={{ minHeight: '80%' }}>
					<h1 className="text-center">Parks In Your Area</h1>
					<MapResults />
				</Container>
			</div>
		);
	}
}

export default Maps;

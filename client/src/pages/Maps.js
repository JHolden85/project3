import React, { Component, useState, useEffect } from 'react';
import {
	MDBCard,
	MDBCardBody,
	MDBCardGroup,
	MDBCardHeader,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
	MDBRow,
	MDBCol,
	MDBCardFooter,
} from 'mdb-react-ui-kit';
import API from '../utils/API';
import NoImg from '../Assets/No_Image_Available.jpg';
import loading from '../Assets/loading.gif';

// import the "SingleParkPage" to send the data from the maps.js

// import the mapResultsPage as a component
// import MapResults from "../components/mapResults";
import { useHistory } from 'react-router-dom';

import Container from '../components/Container';
// import router from '../../../routes/api/userRoutes';

const googleApiKey = process.env.REACT_APP_googleApiKey;

// import MapResults from "../components/mapResults";

const style = {
	card: {
		display: 'block',
		right: '10px',
		margin: 'auto',
		width: '90%',
		color: 'white',
		textShadow: '1px 1px black',
	},
	cardBody: {
		border: '2px solid darkgreen',
		borderRadius: '15px',
		backgroundColor: 'green',
		maxwidth: '20em',
	},
	color: {
		color: 'white',
	},
	header: {
		marginTop: '10px',
		marginBottom: '30px',
		fontSize: '330%',
		textShadow: '1px 1px black',
	},
	loading: {
		width: '100%',
		position: 'relative',
		bottom: '60px',
	},
	loadingText: {
		fontSize: '200%',
		marginTop: '10px',
		textShadow: '1px 1px black',
	},
};

// Setting the developer state
function Maps({ setPark }) {
	// ================= Hooks for setting data ==============
	const [parks, setParks] = useState([]);
	const history = useHistory();
	//Call to retreive the API data, and then load into the setParks function

	useEffect(() => {
		const options = {
			enableHighAccuracy: true,
			maximumAge: 100,
			timeout: 50000,
		};

		// Requests User's Permission
		navigator.geolocation.watchPosition((position) => {
			const { latitude, longitude } = position.coords;

			// Calls Google API based off of user location
			API.getGoogleMap({
				location: `${latitude},${longitude}`,
				radius: 10000,
				type: 'park',
			})
				.then(({ data }) => {
					// console.log('Success:', data);
					setParks(data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		});

		//   });
	}, []);

	const handleSinglePark = (data) => {
		setPark(data);
		localStorage.setItem('park', JSON.stringify(data));
		history.push('/park');
	};

	if (parks.length > 0) {
		return (
			<Container style={{ minHeight: '80%' }} id="mapsCardContainer">
				<h1 className="text-center woodlistFont" style={style.header}>
					Parks in your Area
				</h1>
				<MDBRow className="row-cols-1 row-cols-md-2 g-4">
					{parks.map((park) => {
						const imgSrc = park.photos
							? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}`
							: NoImg;
						return (
							<MDBCol key={park.place_id} style={style.card}>
								<MDBCard alignment="center" style={style.cardBody}>
									<MDBCardBody className="bg-success" style={style.cardBody}>
										<MDBCardTitle>
											<big className="text-white">{park.name}</big>
										</MDBCardTitle>
										<MDBCardImage
											src={imgSrc}
											position="top"
											alt="Park image here"
										/>

										<MDBCardText className="text-white">
											Park Address:
											<br></br>
											{park.vicinity}
										</MDBCardText>

										<MDBBtn
											onClick={() => handleSinglePark(park)}
											key={park.place_id}
										>
											Click Here To Discover More!
										</MDBBtn>
									</MDBCardBody>
									<MDBCardFooter>
										<small className="text" style={style.color}>
											{park.business_status}
										</small>
									</MDBCardFooter>
								</MDBCard>
							</MDBCol>
						);
					})}
				</MDBRow>
			</Container>
		);
	} else {
		return (
			<Container style={{ minHeight: '80%' }} id="mapsCardContainer">
				<h1 className="text-center woodlistFont" style={style.loadingText}>
					Just one second while we get everything ready!
				</h1>
				<img style={style.loading} src={loading} alt="loading!"></img>
			</Container>
		);
	}
}

export default Maps;

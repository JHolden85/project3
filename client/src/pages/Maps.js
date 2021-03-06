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

// import the "SingleParkPage" to send the data from the maps.js

// import the mapResultsPage as a component
// import MapResults from "../components/mapResults";
import { useHistory } from 'react-router-dom';

import Container from '../components/Container';
// import router from '../../../routes/api/userRoutes';

const googleApiKey = process.env.REACT_APP_googleApiKey;
// import MapResults from "../components/mapResults";

// const style = {
// 	card: {
// 		display: 'block',
// 		right: '10px',
// 		margin: 'auto',
// 		width: '90%',
// 		color: 'white',
// 	},
// 	cardBody: {
// 		border: '2px solid darkgreen',
// 		borderRadius: '15px',
// 		backgroundColor: 'green',
// 		// marginTop: 'px',
// 		maxwidth: '20em',
// 	},
// 	color: {
// 		color: 'white',
// 	},
// 	header: {
// 		marginTop: '10px',
// 		marginBottom: '30px',
// 		fontSize: '250%',
// 	},
// };

// Setting the developer state
function Maps({ setPark }) {
	// ================= Hooks for setting data ==============
	const [parks, setParks] = useState([]);
	const history = useHistory();
	//Call to retreive the API data, and then load into the setParks function
	useEffect(() => {
		API.getGoogleMap({
			location: '33.771713,-118.18131',
			radius: 10000,
			type: 'park',
		})
			.then(({ data }) => {
				console.log('Success:', data);
				setParks(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		//   });
	}, []);

	const handleSinglePark = (data) => {
		setPark(data);
		history.push('/park');
	};

	return (
		<Container style={{ minHeight: '80%' }} id="mapsCardContainer">
			<h1 className="text-center" >
      {/* style={style.header} */}
				Parks in your Area
			</h1>
			<MDBRow className="row-cols-1 row-cols-md-2 g-4">
				{parks.map((park) => {
					const imgSrc = park.photos
						? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}`
						: 'https://imgix.ranker.com/user_node_img/94/1872415/original/randall-park-people-in-tv-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces'; //replace '' with placeholder img url

					return (
						<MDBCol key={park.place_id}>
               {/* style={style.card} */}
							<MDBCard alignment="center" >
              {/* style={style.cardBody} */}
								<MDBCardBody className="bg-success">
									<MDBCardTitle >
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

									{/* <MDBCardTitle>
                    The Park is: 
                  </MDBCardTitle> */}

									<MDBBtn
										onClick={() => handleSinglePark(park)}
										key={park.place_id}
									>
										Click Here To Discover More!
									</MDBBtn>
								</MDBCardBody>
								<MDBCardFooter>
									<small className="text" >
                  {/* style={style.color} */}
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
}

export default Maps;
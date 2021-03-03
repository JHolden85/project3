import React, { Component, useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import API from "../utils/API";
// import the "SingleParkPage" to send the data from the maps.js

// import the mapResultsPage as a component
// import MapResults from "../components/mapResults";
import { useHistory } from "react-router-dom";

import Container from '../components/Container';
// import router from '../../../routes/api/userRoutes';

const googleApiKey = process.env.REACT_APP_googleApiKey;
// import MapResults from "../components/mapResults";

// Setting the developer state
function Maps({setPark}) {
  // ================= Hooks for setting data ==============
  const [parks, setParks] = useState([]);
  const history = useHistory();
  //Call to retreive the API data, and then load into the setParks function
  useEffect(() => {
  API.getGoogleMap({
    location: "33.771713,-118.18131",
    radius: 10000,
    type: "park",
  })
    .then(({ data }) => {
      console.log("Success:", data);
      setParks(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //   });
  }, []);

  const handleSinglePark = data => {
    setPark(data);
    history.push("/park")
  }

  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Parks In Your Area</h1>

      <div className="row-3 justify-content-center">
        {parks.map((park) => {
          const imgSrc = park.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}`
            : "https://imgix.ranker.com/user_node_img/94/1872415/original/randall-park-people-in-tv-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"; //replace '' with placeholder img url

          return (
            // <div className="card col-4 ourParkCards square border border-success" onClick={() => handleSinglePark(park)} key={park.place_id}>
              <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
              {/* <img className="cardImg" alt="Imagine A Happy Little Tree" src={imgSrc} /> */}
              <MDBCardHeader>{park.name}</MDBCardHeader>
              <MDBCardImage src={imgSrc} position='top' alt="Park image here"/>
              {/* <div className="text-center">Park Name: {park.name}</div> */}
              <MDBCardText>Park Address: {park.vicinity}</MDBCardText>              
              {/* <div className="text-center">Park Address: {park.vicinity}</div> */}
              <MDBCardTitle>The Park is: {park.business_status}</MDBCardTitle>
              {/* <div className="text-center">Is the Park Open?: {park.business_status}</div> */}
              <MDBBtn onClick={() => handleSinglePark(park)} key={park.place_id}>Click Here To Discover More!</MDBBtn>
              {/* <div>Park Id:</div> */}
              {/* <button onClick={API.getGoogleMap} type="button"></button> */}
            {/* </div> */}
            </MDBCard>
          );
        })}
      </div>
    </Container>
  );
}

export default Maps;

import React, { Component, useState, useEffect } from "react";
import { getGoogleMap } from "../utils/API";
import API from "../utils/API";
// import the "SingleParkPage" to send the data from the maps.js
import SingleParkPage from "./SingleParkPage";
// import the mapResultsPage as a component
// import MapResults from "../components/mapResults";
import { Link } from "react-router-dom";

import Container from "../components/Container";
// import router from '../../../routes/api/userRoutes';

const googleApiKey = process.env.REACT_APP_googleApiKey;
// import MapResults from "../components/mapResults";

// Setting the developer state
function Maps() {
  // ================= Hooks for setting data ==============
  const [parks, setParks] = useState([]);

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

  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Parks In Your Area</h1>

      <div className="row">
        {parks.map((park) => {
          const imgSrc = park.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}`
            : "https://imgix.ranker.com/user_node_img/94/1872415/original/randall-park-people-in-tv-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"; //replace '' with placeholder img url

          return (
            <div className="card col-3 ourParkCards" key={park.place_id}>
              <img alt="Imagine A Happy Little Tree" src={imgSrc} />
              <div>Park Name: {park.name}</div>
              <div>Park Address: {park.vicinity}</div>
              <div>Is the Park Open?: {park.business_status}</div>
              {/* <div>Park Id:</div> */}
              <button onClick={API.getGoogleMap} type="button"></button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Maps;

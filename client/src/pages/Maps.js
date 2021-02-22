import React, { Component, useState, useEffect } from "react";
import { getGoogleMap } from "../utils/API";
import API from "../utils/API";

import Container from "../components/Container";
const googleApiKey = "AIzaSyBh52MlbJJBGNRjJP5tYFwtdEAiYxLqp2s";
// import MapResults from "../components/mapResults";

// Make an iFrame and display the maps FOR SETTING A CLASS
// class Maps extends Component {
//     state= {
//         name:[],
//         photos:[],
//         vicinity:[],
//         error:""
//     };
// Make sure the function is called on page load FOR SETTING A CLASS
//     componentDidMount() {
//         // function to call the axios request and get the data
//         getGoogleMap("33.771713,-118.18131", 1500, "park")
//         .then(res => {
//             console.log("Maps.js ",res);
//             this.setState({
//                 name: res.data.results,
//                 photos: res.data.results,
//                 vicinity: res.data.results
//             });
//         })

// <<<<<<< Nick
// //         .catch((err) => console.log(err));
// =======
// // Make an iFrame and display the maps
// class Maps extends Component {
//     state= {
//         name:[],
//         photos:[],
//         vicinity:[],
//         error:""
//     };
// // Make sure the function is called on page load
//     componentDidMount() {
//         // function to call the axios request and get the data
//         API.getGoogleMap("33.771713,-118.18131", 1500, "park")
//         .then(res => {
//             console.log("Maps.js ",res);
//             this.setState({
//                 name: res.data.results,
//                 photos: res.data.results,
//                 vicinity: res.data.results
//             });
//         })

//         .catch((err) => console.log(err));

// }
// >>>>>>> main

// }
//==================================================================

// Setting the developer state
function Maps() {
  //   const [developerState, setDeveloperState] = useState({
  //     name: [],
  //     photos: [],
  //     vicinity: [],
  //     business_status:""
  //   });

  //data destructuring

  // ================= Hooks for setting data ==============

  // Setting our component's initial state
  //   const [name, setName] = useState([]);
  //   const [photos, setPhotos] = useState([]);
  //   const [vicinity, setVicinity] = useState([]);
  //   const [business_status, setBiz] = useState([]);
  //   const [formObject, setFormObject] = useState({})
  const [parks, setParks] = useState([]);
  //   // Load all parks and store them with setParks
  useEffect(() => {
    getGoogleMap("38.57933,-121.4909", 1500, "park").then(({ data }) => {
      console.log(data.results);
      setParks(data.results);
      // setName()

      //     //   Load up the name
      //       setName(parks)
      //     //   Load up a photo
      //     setPhotos()
      //     // Load up the address
      //     setVicinity()
      //     // State if the park is open
      //     setBiz()

      //     //   loadParks(parks)
      //       console.log(parks);
    });
  }, []);
  // Loads all books and sets them to books
  //   function loadParks() {
  //     getGoogleMap("38.57933,-121.4909", 1500, "park")
  //       // .then(res =>
  //       // =====
  //       // FOR SETTING THE DATA INTO A FUNCTION AND LOAD INTO A DATABASE
  //       // setGoogleMap(res.data)
  //       // ====
  //       // )
  //       .catch((err) => console.log(err));
  //   }

  // render(){
  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Parks In Your Area</h1>
      <h2 className="text-center">Added just to commit</h2>

      <div className="row">
        {parks.map((park) => {
          const imgSrc = park.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}`
            : "https://imgix.ranker.com/user_node_img/94/1872415/original/randall-park-people-in-tv-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"; //replace '' with placeholder img url

          return (
            <div className="card col-3">
              <img alt="biteme" src={imgSrc} />
              <div>Park Name: {park.name}</div>
              <div>Park Address: {park.vicinity}</div>
              <div>Is the Park Open?: {park.business_status}</div>
              <div href="#"></div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Maps;

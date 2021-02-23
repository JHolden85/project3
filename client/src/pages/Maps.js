
import React, { Component, useState, useEffect } from "react";
import { getGoogleMap } from "../utils/API";
import API from "../utils/API";

import Container from "../components/Container";
const googleApiKey = process.env.REACT_APP_googleApiKey;
// import MapResults from "../components/mapResults";
<<<<<<< HEAD
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
=======

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
// Make an iFrame and display the maps
class Maps extends Component {
    state= {
        name:[],
        photos:[],
        vicinity:[],
        error:""
    };
// Make sure the function is called on page load
    componentDidMount() {
        // function to call the axios request and get the data
        API.getGoogleMap("33.771713,-118.18131", 1500, "park")
        .then(res => {
            console.log("Maps.js ",res);
            this.setState({
                name: res.data.results,
                photos: res.data.results,
                vicinity: res.data.results
            });
        })
        
        .catch((err) => console.log(err));    
        
}
// >>>>>>> main

// }
//==================================================================
>>>>>>> 8b8e4dc386e3ff91bba134dcace1e0056de6951a

// Setting the developer state
function Maps() {
  // ================= Hooks for setting data ==============  
  const [parks, setParks] = useState([]);
  //Call to retreive the API data, and then load into the setParks function
  useEffect(() => {
    getGoogleMap("38.57933,-121.4909", 1500, "park").then(({ data }) => {
      console.log(data.results);
      setParks(data.results);
      
    });
  }, []);

  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Parks In Your Area</h1>
      

    <div className="row">

      {parks.map((park) => {
          const imgSrc =park.photos ?  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}` :'https://imgix.ranker.com/user_node_img/94/1872415/original/randall-park-people-in-tv-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces' //replace '' with placeholder img url

          return (
              <div className="card col-3">
                  <img alt="biteme" src={imgSrc}/>
            <div>Park Name: {park.name}</div>
            <div>Park Address: {park.vicinity}</div>
            <div>Is the Park Open?: {park.business_status}</div>
          </div>
        );
    })}
    </div>
    </Container>
  );
}

export default Maps;

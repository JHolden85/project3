import React, { useState, useEffect } from "react";
import { getGoogleMap } from "../utils/API";
import Container from "../components/Container";
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

//         .catch((err) => console.log(err));

// }
//==================================================================

// Setting the developer state
function Maps() {
  const [developerState, setDeveloperState] = useState({
    name: [],
    photos: [],
    vicinity: [],
  });

  // ================= Hooks for setting data ==============

  // Setting our component's initial state
  const [name, setName] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [vicinity, setVicinity] = useState([]);
  //   const [formObject, setFormObject] = useState({})
  //   // Load all parks and store them with setParks
  useEffect(() => {
      let mounted =true;
      getGoogleMap("38.57933,-121.4909", 1500, "park")
      .then(parks =>{
          if(mounted) {
            //   loadParks(parks)
              console.log(parks);
          }
      })
      return (err) => mounted =false;
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

      <div className="card">
        <div>Park Name: {developerState.name}</div>
        <div href="#"></div>
      </div>
    </Container>
  );
}

export default Maps;

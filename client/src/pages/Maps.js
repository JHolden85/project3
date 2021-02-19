import React, { Component, useState } from "react";
import {getGoogleMap} from "../utils/API";
import Container from "../components/Container";
import MapResults from "../components/mapResults";


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
        getGoogleMap("33.771713,-118.18131", 1500, "park")
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

// ================= Hooks for setting data ==============
// import React, { useState, useEffect } from "react";
// // Setting our component's initial state
//   const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({})
//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])
//   // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res => 
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   }; (edited)





render(){
    return(
        <div>
            <Container style={{minHeight: "80%"}}>
                <h1 className="text-center">Parks In Your Area</h1>
                <h2 className="text-center">Please Delete Later</h2>
            <MapResults/>
           </Container>
        </div>
    )
}

}

export default Maps;
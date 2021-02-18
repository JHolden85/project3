import React, { Component, useState } from "react";
import {getGoogleMap} from "../utils/API";
import Container from "../components/Container";
import MapResults from "../components/mapResults";



class Maps extends Component {
    state= {
        icon:"",
        name:"",
        vicinity:"",
    };
// Make sure the function is called on page load
    componentDidMount() {
        // function to call the axios request and get the data
        getGoogleMap("33.771713,-118.18131", 1500, "park")
        .then((res) => {
            console.log(res);
            this.setState({
                icon: res.data.results,
                name: res.data.results,
                vicinity: res.data.results
            });
        })
        .catch((err) => console.log(err));
//         this.googlePark("33.771713,-118.18131", 1500, "park");
//     }
// // function to call the axios request and get the data
// googlePark = (location, radius, type) => {
//     getGoogleMap(location, radius, type)
//     .then(res => {
//         console.log(res);
//         this.setState({
//             icon: res.data.results,
//             name: res.data.results,
//             vicinity: res.data.results
//         });
//     })
//     .catch((err) => console.log(err));
    
    
}


render(){
    return(
        <div>
            <Container style={{minHeight: "80%"}}>
                <h1 className="text-center">Parks In Your Area</h1>
            <MapResults results ={this.state} />
            </Container>
        </div>
    )
}

}

export default Maps;
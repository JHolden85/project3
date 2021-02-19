import React from "react";
// import "./style.css";

function MapResults(props) {
    console.log("mapResults.js ", props.results)
    return (
        <h1>TESTING mapResults PAGE</h1>
        // <ul className="list-group search-results">
        //     {props.results.map(result =>(
        //         <li key={result} className="list-group-item">
        //             <img alt="Park Pic" src={result.photos[0].html_attributions[0]} className="img-fluid" />
        //             <span>
        //                 <h3>{result.name}</h3>
        //             </span>
        //             <span>
        //                 {result.vicinity}
        //             </span>
        //             <br />
        //         </li>
        //     ))}
        // </ul>
    )
}


export default MapResults;
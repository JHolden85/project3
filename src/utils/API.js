import axios from "axios";
const googleApiKey = "AIzaSyBh52MlbJJBGNRjJP5tYFwtdEAiYxLqp2s";

export default {
    getGoogleMap: function (location, radius, type){
        const mapsURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+location+"&radius="+radius+"&type="+type+"&key="+googleApiKey;
        return axios.get(mapsURL);
      }
   };
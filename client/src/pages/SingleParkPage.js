
import Container from "../components/Container"
const googleApiKey = process.env.REACT_APP_googleApiKey;


export default function ParkPage(props) {


    return (
    <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">{props.name}</h1>
        <div className="row">
        {/* {props.map((park) => {
          const imgSrc = park.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${park.photos[0].photo_reference}&key=${googleApiKey}`
            : "https://imgix.ranker.com/user_node_img/94/1872415/original/randall-park-people-in-tv-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"; */}
    <h2 className="text-center">{props.vicinity}:{props.business_status}</h2>
    
     {/* <img alt="biteme" src={props.imgSrc}/> */}
    </div>
        
    </Container>
        
    );
}


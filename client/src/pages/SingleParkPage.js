
import Container from "../components/Container"
const googleApiKey = process.env.REACT_APP_googleApiKey;


export default function ParkPage(props) {


    return (
    <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">{props.name}</h1>
        <div className="row">
        <img alt="Bite-Me" src={props.icon}/>
    <h2 className="text-center">{props.vicinity}:{props.business_status}</h2>
    <div className="row">

    </div>
     {/* <img alt="biteme" src={props.imgSrc}/> */}
    </div>
        
    </Container>
        
    );
}


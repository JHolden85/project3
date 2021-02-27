import {useParams} from "react-router-dom";
import Container from "../components/Container"

export default function ParkPage(props) {
    const {place_id} = useParams()

    return (
    <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">{props.name}</h1>
        <div className="row">
    <h1>{props.name}</h1>
    <img alt="biteme" src={props.imgSrc}/>
    <h2>{place_id}</h2>
    </div>
    </Container>
    );
}


import {useParams} from "react-router-dom";

export default function ParkPage(props) {
    const {place_id} = useParams()
    return <>
    <h1>{props.name}</h1>
    <img alt="biteme" src={props.imgSrc}/>
    <h2>{place_id}</h2>
    </>
}
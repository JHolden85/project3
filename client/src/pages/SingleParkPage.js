import {useParams} from "react-router-dom";

export default function ParkPage(props) {
    const {id} = useParams()
    return <>
    <h1>{props.name}</h1>
    <img alt="biteme" src={props.imgSrc}/>
    <h2>{id}</h2>
    </>
}
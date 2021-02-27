import {useParams} from "react-router-dom";
//import multer from

export default function ParkPage(props) {
    const {place_id} = useParams()

    const UploadPic = function(img) {
        console.log(img.target.value)
        var StorePic = img.target.value
    }

    return <>
    <h1>{props.name}</h1>
    <img alt="biteme" src={props.imgSrc}/>
    <h2>{place_id}</h2>
    <input type="file" placeholder="Upload Photo" onChange = {UploadPic} ></input>
    </>
}
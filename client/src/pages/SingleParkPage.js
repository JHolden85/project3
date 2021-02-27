

import Container from "../components/Container"

export default function ParkPage(props) {

<<<<<<< HEAD
    const UploadPic = function(img) {
        console.log(img.target.value)
        var StorePic = img.target.value
    }
=======
>>>>>>> 2a43a777997d9c32a557a461f38906e86492b72c

    return (
    <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">{props.name}</h1>
        <div className="row">
    <h1>{props.data}</h1>
    <img alt="biteme" src={props.imgSrc}/>
    </div>
    </Container>
    );
}



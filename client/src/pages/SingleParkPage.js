import Container from '../components/Container';

export default function ParkPage(props) {
	const googleApiKey = process.env.REACT_APP_googleApiKey;

	const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=${googleApiKey}`;

	console.log('passed in props to the single page', props);
	return (
		<Container style={{ minHeight: '80%' }}>
			<h1 className="text-center">{props.name}</h1>
			<div className="row">
				<h1>{props.data}</h1>
				<img alt="biteme" src={imgSrc} />
			</div>
			<div>
				<h4>{props.vicinity}</h4>
			</div>
			<div>
				<h4>Community Rating: {props.rating}</h4>
			</div>
		</Container>
	);
}

// ======================

//     const UploadPic = function(img) {
//         ////const {place_id} = useParams()
//         console.log(img.target.value)
//         var StorePic = img.target.value
//     }

//     return (
//     <Container style={{ minHeight: "80%" }}>
//         <h1 className="text-center">{props.name}</h1>
//         <div className="row">
//     <h1>{props.data}</h1>
//     <img alt="biteme" src={props.imgSrc}/>
// <input type="file" placeholder="Upload Photo" onChange = {UploadPic} ></input>
//     </div>
//     </Container>
//     );
// }
// ==================

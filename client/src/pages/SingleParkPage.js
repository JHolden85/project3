import Container from '../components/Container';
import AmmBtn from '../components/AmmenityButtons/index';


const style = {
	parentDiv: {
		marginBottom: '60px',
		backgroundColor: 'green',
		margin: '10px 10px 100px 10px',
		padding: '10px',
		color: 'white',
		border: '2px solid darkgreen',
		borderRadius: '15px',
		textShadow: '1px 1px black',
	},
	image: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '80%',
		border: '1.5px solid darkgreen',
		borderRadius: '15px',
	},
	a: {
		color: 'white',
	},
};

export default function ParkPage(props) {
	const googleApiKey = process.env.REACT_APP_googleApiKey;

	const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=350&photoreference=${props.photos[0].photo_reference}&key=${googleApiKey}`;

	return (
		<Container style={{ minHeight: '80%' }}>
			<div style={style.parentDiv}>
				<h1 className="text-center">{props.name}</h1>
				<div className="row">
					<h1>{props.data}</h1>
					<img alt="biteme" style={style.image} src={imgSrc} />
				</div>
				<div>
					<br></br>
					<h4>
						<a
							href={`https://maps.google.com/?ll=${props.geometry.location.lat},${props.geometry.location.lng}`}
							target="_blank"
							rel="noreferrer"
							style={style.a}
						>
							{props.vicinity}
						</a>
					</h4>
				</div>
				<div>
					<h4>Community Rating: {props.rating}</h4>					
				</div>
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

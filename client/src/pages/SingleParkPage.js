import Container from '../components/Container';
import NoImg from '../Assets/No_Image_Available.jpg';
import Amenities from '../components/Amenities';
import { useEffect, useState } from 'react';
import API from '../utils/API';

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
		borderRadius: '15px',
	},
	a: {
		color: 'white',
	},
	h1: {
		fontSize: '150%',
	},
	Amenities: {
		paddingLeft: '20px',
		paddingRight: '20px',
	},
	ul: {
		listStyleType: 'none',
	},
};

export default function ParkPage() {
	const savedPark = localStorage.getItem('park');
	const parsedPark = JSON.parse(savedPark);

	const [park, setPark] = useState(parsedPark);

	console.log(park);

	const { place_id, name } = park;

	useEffect(() => {
		API.findPark({ place_id: place_id }).then((data) => {
			console.log('data sent to backend', data);

			if (data.data === null) {
				console.log('no park data found');
				API.postPark({ place_id: place_id, name: name })
					.then((data) => console.log('posted data', data))
					.catch((err) => console.log(err));
			} else {
				console.log(data.data);
			}
		});
	});

	const googleApiKey =
		process.env.REACT_APP_googleApiKey || process.env.googleApiKey;

	const imgSrc = parsedPark.photos
		? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${parsedPark.photos[0].photo_reference}&key=${googleApiKey}`
		: NoImg;

	return (
		<Container style={{ minHeight: '80%' }}>
			<div style={style.parentDiv}>
				<h1 className="text-center" style={style.h1}>
					{parsedPark.name}
				</h1>
				<div className="row">
					<img
						alt={'sorry, no data available'}
						style={style.image}
						src={imgSrc}
					/>
				</div>
				<div>
					<br></br>
					<h4>
						<a
							href={`https://maps.google.com/?ll=${parsedPark.geometry.location.lat},${parsedPark.geometry.location.lng}`}
							target="_blank"
							rel="noreferrer"
							style={style.a}
						>
							{parsedPark.vicinity}
						</a>
					</h4>
				</div>
				<div>
					<h4>Community Rating: {parsedPark.rating}</h4>
				</div>
				<hr></hr>
				<br></br>
				<Amenities park={park} />
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

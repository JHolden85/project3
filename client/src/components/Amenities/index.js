import React from 'react';
import edit from '../../Assets/Icons/icons8-edit-24.png';
import yes from '../../Assets/Icons/true.png';
import no from '../../Assets/Icons/false.png';
import './style.css';

const Amenities = ({ park }) => {
	const handleClick = () => {
		console.log('clicked');
	};

	// console.log('amenities component', park);

	return (
		<div className="Amenities travelFont">
			<div className=" row">
				<ul className="col">
					<li>Baseball:</li>
					<hr></hr>
					<li>Soccer:</li>
					<hr></hr>
					<li>Football:</li>
					<hr></hr>
					<li>Basketball:</li>
					<hr></hr>
					<li>Running Track:</li>
					<hr></hr>
					<li>Handball:</li>
					<hr></hr>
					<li>Tennis:</li>
					<hr></hr>
					<li>Trail:</li>
					<hr></hr>
					<li>Pool:</li>
					<hr></hr>
					<li>Running Track:</li>
				</ul>
				<ul className="col">
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						no{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						no{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
					<hr></hr>
					<li>
						yes{' '}
						<button className="editBtn" onClick={handleClick}>
							<img src={edit} alt="edit"></img>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Amenities;

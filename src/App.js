import './App.css';
import { Balloon } from './components/Balloon';
import { useState, useEffect } from 'react';

function App() {
	//To keep track the balloon number from input field
	const [balloonNumber, setBalloonNumber] = useState('');

	// To set activeness of the balloon in box in default all are not active
	const [boxActiveBalloon, setBoxActiveBalloon] = useState({
		balloon_1: 'not-active',
		balloon_2: 'not-active',
		balloon_3: 'not-active',
		balloon_4: 'not-active',
		balloon_5: 'not-active',
	});

	// To set activeness of the balloon in open area in default all are active
	const [openActiveBalloon, setOpenActiveBalloon] = useState({
		balloon_1: 'active',
		balloon_2: 'active',
		balloon_3: 'active',
		balloon_4: 'active',
		balloon_5: 'active',
	});

	const [colorGenerator, setColorGenerator] = useState({
		balloon_1: '',
		balloon_2: '',
		balloon_3: '',
		balloon_4: '',
		balloon_5: '',
	});

	// to handle the submit event of the input field.
	const handleShoot = () => {
		// To show alert if proper input is not given.
		if (balloonNumber > 5 || balloonNumber < 1 || balloonNumber === '') {
			alert('Please enter a number between 1 and 5');
			return;
		}

		// if proper input is given then create string to match with default object property
		let ballonNo = `balloon_${balloonNumber}`;
		// console.log(ballonNo);
		// Setting open area balloon to not active
		setOpenActiveBalloon({
			...openActiveBalloon,
			[ballonNo]: 'not-active',
		});
		// Setting box area balloon to active
		setBoxActiveBalloon({
			...boxActiveBalloon,
			[ballonNo]: 'active',
		});
	};
	// To handle change in input field
	const handleChange = (event) => {
		setBalloonNumber(event.target.value);
	};
	const handleBoxBallonClick = (event) => {
		// To capture circle div which get clicked
		let div = event.target;
		let balloon = div.getAttribute('name');
		// Splitting the name to get balloon number from name
		let ballonNumber = balloon.split('-')[2];
		// Creating string to match with default object property
		let ballonNo = `balloon_${ballonNumber}`;
		// console.log(ballonNo);
		// Setting open area balloon to active
		setOpenActiveBalloon({
			...openActiveBalloon,
			[ballonNo]: 'active',
		});
		// Setting box area balloon to not active
		setBoxActiveBalloon({
			...boxActiveBalloon,
			[ballonNo]: 'not-active',
		});
	};

	const generateRandomColor = () => {
		// To generate color for each balloon range from 1 to 16777215
		let color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		let color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		let color3 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		let color4 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		let color5 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		// Setting color for each balloon
		setColorGenerator({
			balloon_1: color1,
			balloon_2: color2,
			balloon_3: color3,
			balloon_4: color4,
			balloon_5: color5,
		});
	};
	useEffect(() => {
		generateRandomColor();
	}, []);

	return (
		<>
			<div className='container'>
				<div>
					<div className='box'>
						<div onClick={handleBoxBallonClick}>
							<Balloon
								name='box-ballon-1'
								activeness={boxActiveBalloon.balloon_1}
								color={colorGenerator.balloon_1}
							/>
						</div>
						<div onClick={handleBoxBallonClick}>
							<Balloon
								name='box-ballon-2'
								activeness={boxActiveBalloon.balloon_2}
								color={colorGenerator.balloon_2}
							/>
						</div>
						<div onClick={handleBoxBallonClick}>
							<Balloon
								name='box-ballon-3'
								activeness={boxActiveBalloon.balloon_3}
								color={colorGenerator.balloon_3}
							/>
						</div>
						<div onClick={handleBoxBallonClick}>
							<Balloon
								name='box-ballon-4'
								activeness={boxActiveBalloon.balloon_4}
								color={colorGenerator.balloon_4}
							/>
						</div>
						<div onClick={handleBoxBallonClick}>
							<Balloon
								name='box-ballon-5'
								activeness={boxActiveBalloon.balloon_5}
								color={colorGenerator.balloon_5}
							/>
						</div>
					</div>
				</div>

				<div className='balloon'>
					<div onClick={handleBoxBallonClick}>
						<Balloon
							activeness={openActiveBalloon.balloon_1}
							color={colorGenerator.balloon_1}
						/>
					</div>
					<div onClick={handleBoxBallonClick}>
						<Balloon
							activeness={openActiveBalloon.balloon_2}
							color={colorGenerator.balloon_2}
						/>
					</div>
					<div onClick={handleBoxBallonClick}>
						<Balloon
							activeness={openActiveBalloon.balloon_3}
							color={colorGenerator.balloon_3}
						/>
					</div>
					<div onClick={handleBoxBallonClick}>
						<Balloon
							activeness={openActiveBalloon.balloon_4}
							color={colorGenerator.balloon_4}
						/>
					</div>
					<div onClick={handleBoxBallonClick}>
						<Balloon
							activeness={openActiveBalloon.balloon_5}
							color={colorGenerator.balloon_5}
						/>
					</div>
				</div>

				<div>
					<input
						type='text'
						onChange={handleChange}
						value={balloonNumber}
						id='balloon-number'
						placeholder='Enter Balloon Number to Shoot'
					/>
					<button onClick={handleShoot}>Shoot</button>
				</div>
			</div>
		</>
	);
}

export default App;

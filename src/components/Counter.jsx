import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	const [userInput, setUserInput] = useState('');

	const handleClickPlus = () => {
		setCount(count + 1);
	};
	const handleClickMinus = () => {
		setCount(count - 1);
	};
	const handleUserInput = (e) => {
		setUserInput(e.target.value);
	};
	const handleEnter = (e) => {
		if ((e.key === 'Enter')) {
			setUserInput('');
			const num = Number(userInput);
			if (Number.isInteger(num)) setCount(num);
		}
	};

	return (
		<>
			<div>current count: {count}</div>
			<div>
				<div>count value input :</div>
				<input type="text" value={userInput} onChange={handleUserInput} onKeyDown={handleEnter} />
			</div>
			<div>
				<div>buttons: </div>
				<button type="button" onClick={handleClickPlus}>
					+
				</button>
				<button type="button" onClick={handleClickMinus}>
					-
				</button>
			</div>
		</>
	);
}

export default Counter;

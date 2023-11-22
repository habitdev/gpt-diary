import { Button, Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

function Diaryinput({ isLoading, onSubmit }) {
	const [userInput, setUserInput] = useState('');
	// 사용자의 입력을 받아 상위 컴포넌트로 제출
	// 부모 컴포넌트가 로딩 중이면 제출을 못하도록 한다

	const handleUserInput = (e) => {
		setUserInput(e.target.value);
	};

	const handleClick = () => {
		onSubmit(userInput);
	};

	return (
		<>
			<TextArea value={userInput} onChange={handleUserInput} placeholder="오늘 일어난 일들을 간단히 적어주세요 ✏️" />
			<Button loading={isLoading} onClick={handleClick}>
				GPT 회고록을 작성해줘!
			</Button>
		</>
	);
}

export default Diaryinput;

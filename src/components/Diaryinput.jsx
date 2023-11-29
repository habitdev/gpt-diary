import { useState } from 'react';
import { Input, Button, message } from 'antd';
import { Divider, Title } from './CommonStyles';
import styled from 'styled-components';

const { TextArea } = Input;

function Diaryinput({ isLoading, onSubmit }) {
	const [userInput, setUserInput] = useState('');
	const [messageApi, contextHolder] = message.useMessage();
	// 사용자의 입력을 받아 상위 컴포넌트로 제출
	// 부모 컴포넌트가 로딩 중이면 제출을 못하도록 한다

	const handleUserInput = (e) => {
		setUserInput(e.target.value);
	};

	const handleClick = () => {
		if (!userInput) {
			messageApi.open({
				type: 'error',
				content: '일과를 적어주세요',
			});

			return;
		}

		messageApi.open({
			type: 'success',
			content: '생성 요청 완료',
		});

		onSubmit(userInput);
		setUserInput('');
	};

	return (
		<div>
			{contextHolder}
			<Title>오늘의 일:</Title>
			<TextArea value={userInput} onChange={handleUserInput} placeholder="오늘 일어난 일들을 간단히 적어주세요 ✏️" style={{ height: '200px' }} />
			<ButtonContainer>
				<Button loading={isLoading} onClick={handleClick}>
					GPT 회고록을 작성해줘!
				</Button>
			</ButtonContainer>
		</div>
	);
}

export default Diaryinput;

const ButtonContainer = styled.div`
	margin: 20px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	gap: 5px;
`;

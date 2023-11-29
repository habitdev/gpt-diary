import { useState } from 'react';
import { CallGPT } from './api/gpt';
import Diaryinput from './components/Diaryinput';
import styled from 'styled-components';
import logo from './assets/logo.png';
import DiaryDisplay from './components/DiaryDisplay';

const DUMMY_DATA = JSON.parse(
	`{ "title": "코딩 강의와 버그 해결", "thumbnail": "https://source.unsplash.com/1600x900/?coding", "summary": "코딩 강의를 듣고 프로젝트에서 발생한 버그를 해결하는 과정", "emotional_content": "오늘은 코딩 강의를 들었다. 강의를 통해 새로운 개념과 기술을 배웠는데, 실제로 프로젝트에서 버그가 많이 발생했다. 처음에는 스택오버플로와 구글 검색을 통해 해결하려고 했지만, 원하는 답을 찾지 못했다. 그럴 때마다 혼란과 좌절감이 커져갔다. 결국, GPT를 활용해서 버그를 해결하는 방법을 찾았다. 그러나 이렇게 해결하는 것이 실제 개발 실력에 도움이 될까 고민이 든다.", "emotional_result": "이번 경험을 통해 나는 문제에 직면했을 때의 과정과 감정을 더 잘 이해하게 되었다. 처음에는 스택오버플로와 검색을 통해 해결하려고 했지만, 실패하면서 좌절감을 느꼈다. 그러나 결국 GPT를 활용해서 문제를 해결했을 때에는 성취감과 만족감을 느꼈다. 이 경험은 나에게 도전과 고민을 두려워하지 말고 다양한 방법을 시도해보는 중요성을 알려주었다.", "analysis": "이러한 상황은 '문제 해결 능력'과 '자기 효능감'과 관련이 깊다. 문제 해결 능력은 개발자로서 중요한 역량 중 하나이며, 이번 경험을 통해 나는 문제를 해결하는 과정과 다양한 방법을 시도하는 중요성을 깨달았다. 또한, 자기 효능감은 개인이 자신의 능력에 대한 믿음을 갖고 문제에 대처하는 데 도움을 준다. 이번 경험을 통해 나는 GPT를 활용하여 버그를 해결하는 능력을 발견하였고, 이를 통해 자신감을 얻을 수 있게 되었다.", "action_list": ["다양한 문제 해결 방법을 시도해보기", "실제 개발 실력 향상을 위해 추가적인 학습 진행하기", "자기 효능감을 키우기 위해 성공적인 경험을 적극적으로 찾아보기"] }`
);

function App() {
	const [data, setData] = useState(DUMMY_DATA);
	const [isLoading, setIsLoading] = useState(false);
	const handleClickAPICall = async (userInput) => {
		try {
			setIsLoading(true);
			const message = await CallGPT({
				prompt: `${userInput}`,
			});
			setData(JSON.parse(message));
		} catch (error) {
			return;
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = (userInput) => {
		handleClickAPICall(userInput);
	};

	return (
		<AppContainer>
			<AppTitle>
				심리 상담사 GPT, AI 회고록 <img width={'100px'} src={logo} />
			</AppTitle>
			<Diaryinput isLoading={isLoading} onSubmit={handleSubmit} />
			<DiaryDisplay isLoading={isLoading} data={data} />
			{/* <div>isLoading: {isLoading ? 'loading...' : 'fin'}</div> */}
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	max-width: 720px;
	width: 100%;
	margin: 0 auto;
`;

const AppTitle = styled.div`
	width: 100%;
	font-weight: 400;
	font-size: 35px;
	text-align: center;
	font-family: 'Noto Serif KR';
`;

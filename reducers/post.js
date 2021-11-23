export const initialState = {
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: '제로초'
			},
			content: '첫 번째 게시글 #해시태그 #익스프레스',
			Images: [
				{
					src: 'https://bookthumb-printf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
				},
				{
					src: 'https://bookthumb-printf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
				},
				{
					src: 'https://bookthumb-printf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
				}
			],
			Comments: [
				{
					User: {
						nickname: 'nero'
					},
					content: '우와 개정판이 나왔군요~'
				},
				{
					User: {
						nickname: 'hero'
					},
					content: '언른 사고싶어요~'
				}
			]
		}
	],
	imagePaths: [],
	postAdded: false
};

// 게시글 작성하는 action
const ADD_POST = 'ADD_POST';
export const addPost = {
	type: ADD_POST
};

const dummyPost = {
	id: 2,
	content: '더미데이터입니다.',
	User: {
		id: 1,
		nickname: '제로초'
	},
	Images: [],
	Comments: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				mainPosts: [dummyPost, ...state.mainPosts],
				postAdded: true
			};
		default:
			return state;
	}
};

export default reducer;

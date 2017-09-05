import { actionType } from './actionType'

export default function reducer(state, action) {
	switch (action.type) {
		case actionType.REQUEST_ARTICLES:
			return Object.assign({}, state, {
        		isFetching: true
      		});
        case actionType.RECEIVE_ARTICLES:
			return Object.assign({}, state, {
				isFetching: false,
				articleList: action.articles,
				articleListHash: action.articleListHash
			});
		default:
			return state
	}
}


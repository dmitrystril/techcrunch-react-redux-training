import { actionType } from './actionType'
import TechcrunchService from '../service/TechcrunchService'
import md5 from 'js-md5'
import 'whatwg-fetch'

const actions = {
	requestArticles() {
		return {
			type: actionType.REQUEST_ARTICLES
		}
	},

	receiveArticles(json, state) {
        let hash = md5(JSON.stringify(json));

        if (hash !== state.articleListHash) {
			console.log('%cupdating articles...', 'background: #000000; color: #00FF00');
			// TODO DS: use this to avoid updating state when not needed
		}

		return {
			type: actionType.RECEIVE_ARTICLES,
			articles: json.articles,
			articleListHash: hash
		}
    },

    fetchArticles:function() {
    	return function (dispatch, getState) {
            if (!getState().isFetching) {
        	    dispatch(actions.requestArticles());
                return TechcrunchService.getLatestArticles()
                .then(json => dispatch(actions.receiveArticles(json, getState())))
                .catch(ex => console.log('Request failed', ex))
            } else {
                Promise.resolve()
            }
        }
    }
};

export default actions

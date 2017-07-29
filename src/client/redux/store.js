import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'
import ReduxThunk  from 'redux-thunk'

let doCreateStore = compose(
	applyMiddleware(ReduxThunk, createLogger())
)(createStore)

export default function configureStore(initialState) {
	return doCreateStore(reducer, initialState)
}

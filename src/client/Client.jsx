import React  from 'react'
import ReactDOM  from 'react-dom'
import App from './component/App.jsx'
import PageNotFound from './component/PageNotFound.jsx'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import actions from './redux/actions'

const initialState = {
  articleList: [],
  isFetching: false,
  articleListHash: ''
};

const store = configureStore(initialState);
store.dispatch(actions.fetchArticles());

ReactDOM.render(
  <Provider store={store}>  
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={App} />     
              {/*<Route path="/testroute" component={TestRoute} />*/} 
              <Route component={PageNotFound}/>
          </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

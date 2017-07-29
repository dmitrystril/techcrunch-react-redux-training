import React, { Component } from 'react'
import { connect, dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import actions from '../redux/actions'
import ArticleList from './ArticleList.jsx'
import styles from './style/app.css'
import faviconImage from '../resource/image/favicon.ico'

class App extends Component {
	render() {
		return (
		    <div>
                <h1 className={styles.header}>
                    <a href='https://techcrunch.com/'>TechCrunch</a> 10 Latest News <sup><small>LIVE</small></sup>
                </h1>

                <ArticleList articleList={this.props.articleList} actions={this.props.actions}/>	

                <p className={styles.poweredBy}>
                    powered by <a href='http://newsapi.org/'>NewsAPI.org</a>
                </p>
            </div>    
		);
	}
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

App.propTypes = {  
  articleList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

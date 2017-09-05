import React from 'react'
import { connect, dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import actions from '../redux/actions'
import ArticleList from './ArticleList.jsx'
import styles from './style/app.css'
import faviconImage from '../resource/image/favicon.ico'

const App = props => {
	return (
		<div>
            <h1 className={styles.header}>
                <a href='https://techcrunch.com/'>TechCrunch</a> 10 Latest News <sup><small>LIVE</small></sup>
            </h1>

            <ArticleList articleList={props.articleList} actions={props.actions}/>	

            <p className={styles.poweredBy}>
                powered by <a href='http://newsapi.org/'>NewsAPI.org</a>
            </p>
        </div>    
	);
};

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

App.propTypes = {  
  articleList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

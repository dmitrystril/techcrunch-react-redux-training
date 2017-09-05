import React from 'react'
import PropTypes from 'prop-types'

import styles from './style/title.css'

const ArticleTitle = props => {
	return (
		<h2 className={styles.title}>
		    <a href={props.url}>{props.title}</a>
		</h2>
	)
};

export default ArticleTitle;

ArticleTitle.propTypes = {  
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

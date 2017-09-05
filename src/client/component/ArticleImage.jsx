import React from 'react'
import PropTypes from 'prop-types'

import styles from './style/image.css'

const ArticleImage = props => {
	return (
		<a href={props.url}><img className={styles.image} src={props.urlToImage} /></a>
	)
};

export default ArticleImage;

ArticleImage.propTypes = {  
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired
};

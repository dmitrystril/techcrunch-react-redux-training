import React from 'react'
import PropTypes from 'prop-types'

import styles from './style/description.css'

const ArticleDescription = props => {
    return (
        <p className={styles.description}>
            {props.description} <a className={styles.read_more} href={props.url}>Read More</a>
        </p>
    )
};

export default ArticleDescription;

ArticleDescription.propTypes = {  
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

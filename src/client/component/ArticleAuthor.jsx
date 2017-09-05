import React from 'react'
import PropTypes from 'prop-types'

import styles from './style/author.css'

const ArticleAuthor = ({author}) => {
    return (
        <div className={styles.default}>
            by <span className={styles.author}>{author}</span>
        </div>
    )
};

export default ArticleAuthor;

ArticleAuthor.propTypes = {
    author: PropTypes.string.isRequired
};

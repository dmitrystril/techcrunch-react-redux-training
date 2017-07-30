import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './style/author.css'

export default class ArticleAuthor extends Component {
    render() {
        return (
            <div className={styles.default}>
                by <span className={styles.author}>{this.props.author}</span>
            </div>    
        )
    }
}

ArticleAuthor.propTypes = {  
  author: PropTypes.string.isRequired
};

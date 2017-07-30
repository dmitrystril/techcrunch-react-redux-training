import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './style/description.css'

export default class ArticleDescription extends Component {
    render() {
        return (
            <p className={styles.description}>
            	{this.props.description} <a className={styles.read_more} href={this.props.url}>Read More</a>
            </p>
        )
    }
}

ArticleDescription.propTypes = {  
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

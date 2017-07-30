import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './style/image.css'

export default class ArticleImage extends Component {
    render() {
        return (
            <a href={this.props.url}><img className={styles.image} src={this.props.urlToImage} /></a>
        )
    }
}

ArticleImage.propTypes = {  
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired
};

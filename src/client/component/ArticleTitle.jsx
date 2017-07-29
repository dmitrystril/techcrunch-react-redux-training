import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styles from './style/title.css';

export default class ArticleTitle extends Component {
    render() {
        return (
            <h2 className={styles.title}>
                <a href={this.props.url}>{this.props.title}</a>
            </h2>
        )
    }
}

ArticleTitle.propTypes = {  
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

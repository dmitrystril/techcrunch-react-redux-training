import React, { Component } from 'react';
import PropTypes from 'prop-types'
import dateFormat from 'dateformat';

import styles from './style/date.css';

const dateFormatPattern = 'mmm dd, yyyy';

export default class ArticleDate extends Component {
    render() {
        return (
            <span className={styles.date}>{dateFormat(this.props.date, dateFormatPattern)}</span>
        )
    }
}

ArticleDate.propTypes = {  
  date: PropTypes.string.isRequired
};

import React from 'react'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'

import styles from './style/date.css'

const dateFormatPattern = 'mmm dd, yyyy';

const ArticleDate = ({date}) => {
    return (
        <span className={styles.date}>{dateFormat(date, dateFormatPattern)}</span>
    )
};

export default ArticleDate;

ArticleDate.propTypes = {  
  date: PropTypes.string.isRequired
};

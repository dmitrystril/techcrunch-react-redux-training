import React from 'react'
import styles from './style/pageNotFound.css'
import pageNotFoundImage from '../resource/image/404.png'

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <img src={pageNotFoundImage}/>
        </div>    
    )
};

export default PageNotFound;

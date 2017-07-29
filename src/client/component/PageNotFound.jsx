import React, { Component } from 'react'
import styles from './style/pageNotFound.css'
import pageNotFoundImage from '../resource/image/404.png'

export default class PageNotFound extends Component {
    render() {
        return (
        	<div className={styles.container}>
                <img src={pageNotFoundImage}/>
            </div>    
        )
    }
}

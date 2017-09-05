import React from 'react'

import ArticleTitle from './ArticleTitle.jsx'
import ArticleAuthor from './ArticleAuthor.jsx'
import ArticleDate from './ArticleDate.jsx'
import ArticleDescription from './ArticleDescription.jsx'
import ArticleImage from './ArticleImage.jsx'
import PropTypes from 'prop-types'

import styles from './style/article.css'

const Article = ({article}) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.columnOne}>
                <ArticleDate date={article.publishedAt} />
            </div> 

            <div className={styles.columnTwo}>
                <ArticleTitle title={article.title} url={article.url}/>
                <ArticleAuthor author={article.author} />
                <ArticleDescription description={article.description} url={article.url}/>
            </div>    

            <div className={styles.columnThree}>
                <ArticleImage urlToImage={article.urlToImage} url={article.url} />
            </div> 
        </li>
    );
};

export default Article;

Article.propTypes = {  
  article: PropTypes.object.isRequired
};

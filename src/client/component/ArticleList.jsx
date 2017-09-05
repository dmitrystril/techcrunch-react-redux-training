import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article.jsx'
import styles from './style/articleList.css'

export default class ArticleList extends Component {
    componentDidMount() {
        this.updateIntervalId = setInterval(() => {
            this.props.actions.fetchArticles()
        }, 60000)
    }

    componentWillUnmount() {
        clearInterval(this.updateIntervalId);
    }

    render() {
        let articleList = renderArticleList(this.props.articleList);

        return (
            <ul className={styles.list}>
                {articleList}
            </ul>
        );
    }
}

const renderArticleList = articleList => {
    if (articleList && articleList.length > 0) {
        return articleList.map((listElement, index) => (
            <Article article={listElement} key={index} />
        ));
    } else {
        return [];
    }
};

ArticleList.propTypes = {
  articleList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

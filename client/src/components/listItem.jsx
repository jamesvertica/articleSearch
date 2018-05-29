import React from 'react';

const ArticleItem = (props) => {

    console.log(props.article, 'AH')

    return (
        <div>
            <div>{props.article.headline}</div>
            <div>{props.article.snippet}</div>
            <div>{props.article.published}</div>
            <div>{props.article.wordCount}</div>
            <div>{props.article.uri}</div>
        </div>
    )
}
export default ArticleItem;
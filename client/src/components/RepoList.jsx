import React from 'react';
import ArticleItem from './listItem.jsx'

const ArticleList = (props) => {
  console.log(props.articles)
  return (
    <div>
      <h4> Top 10 Stories </h4>
      {props.articles.map(article => <ArticleItem article={article} /> )}
    </div>
  )
}
export default ArticleList;
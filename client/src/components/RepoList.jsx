import React from 'react';

const ArticleList = (props) => (
  <div>
    <h4> Article List Component </h4>
    There are {props.articles.length} articles.
  </div>
)

export default ArticleList;
import React from 'react';

const ArticleList = (props) => (
  <div>
    <h4> Article List Component </h4>
    There are {props.articles.length} articles.
    {props.articles[3] && <h3> {props.articles[0].headline} </h3>}
  </div>
)

export default ArticleList;
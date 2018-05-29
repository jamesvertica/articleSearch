import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ArticleItem = (props) => {

    console.log(props.article, 'AH')

    return (
        <div>
            <paper>{props.article.headline}</paper>
            <paper>{props.article.snippet}</paper>
            <paper>{props.article.published}</paper>
            <paper>{props.article.wordCount}</paper>
            <paper>{props.article.uri}</paper>
        </div>
    )
}
export default ArticleItem;
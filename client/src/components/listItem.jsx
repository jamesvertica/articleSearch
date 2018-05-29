import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

const ArticleItem = (props) => {

    console.log(props.article, 'AH')

    return (
        <Card>
            <CardHeader>{props.article.headline} </CardHeader>
            <CardContent>{props.article.snippet}</CardContent>
            <CardContent>{props.article.published}</CardContent>
            <CardContent>{props.article.wordCount}</CardContent>
            <CardContent>{props.article.uri}</CardContent>
        </Card>
    )
}
export default ArticleItem;
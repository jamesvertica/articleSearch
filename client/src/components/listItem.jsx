import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

const ArticleItem = (props) => {

    console.log(props.article, 'AH')

    return (
        <Card>
            <CardHeader>{props.article.headline} </CardHeader>
            <Typography variant="title">{props.article.snippet}</Typography>
            <Typography variant="caption">{props.article.published}</Typography>
            <CardActions>
           <Button size="small" >{props.article.wordCount}</Button>
                <Button size="small">{props.article.uri}></Button>
            </CardActions>
        </Card>
    )
}
export default ArticleItem;
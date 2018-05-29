import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

const ArticleItem = (props) => {

    console.log(props.article, 'AH')

    // const { classes } = props;



    return (
        <Card>
        <CardContent>
            <Typography
             {props.article.published} color="textSecondary">
            </Typography>
            <Typography {props.article.headline} variant="headline" component="h2"></Typography>
            <Typography>{props.article.snippet}</Typography>
            <Typography {props.article.wordCount} color="textSecondary"></Typography>
            <Typography {props.article.uri} color="textSecondary"></Typography>
            </CardContent>
        </Card>
    )
}
export default ArticleItem;
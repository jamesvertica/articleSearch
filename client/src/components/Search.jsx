import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: ''
    }
  }

  onChange (e) {
    this.setState({
      topic: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.topic);
  }

  render() {
    return (<div>
      <Typography variant="display"> Read Below: </Typography>
      Enter a topic: <TextField value={this.state.topic} onChange={this.onChange.bind(this)}/>       
      <Button variant="raised" color="primary" onClick={this.search.bind(this)}> Lookup </Button>
    </div>) 
  }
}

export default Search;
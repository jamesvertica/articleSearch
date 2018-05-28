import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
      <h4>Add more articles!</h4>
      Enter a topic: <TextField value={this.state.topic} onChange={this.onChange.bind(this)}/>       
      <Button variant="raised" color="primary" onClick={this.search.bind(this)}> Archive Articles </Button>
    </div>) 
  }
}

export default Search;
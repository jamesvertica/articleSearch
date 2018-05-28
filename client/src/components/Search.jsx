import React from 'react';

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
      Enter a topic: <input value={this.state.topic} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Archive Articles </button>
    </div>) 
  }
}

export default Search;
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ArticleList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      articles: []
    }
  }

  search (topic) {
    console.log(`${topic} was searched`);

    axios.post('/articles', {topic: topic})
    .then(function(response){
      response.body.topic   
    })
    .then(axios.get('/articles')).then(resolved => {
      console.log(resolved) 
      this.setState({articles: resolved})});
  };

  render () {
    return (<div>
      <h1>Article Fetcher</h1>
      <ArticleList articles={this.state.articles}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
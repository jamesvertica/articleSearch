import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ArticleList from './components/RepoList.jsx';
import axios from 'axios';
// import 'typeface-roboto'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    axios.get('/articles', ).then((resolved) => {
      // console.log(resolved.data)
      this.setState({ articles: resolved.data });
    })
  }

  search(topic) {
    console.log(`${topic} was searched`);

    axios.post('/articles', { topic: topic })
      .then(response => {
        // console.log(response)
      })
      .then(axios.get('/articles').then(resolved => {
        // console.log(resolved) 
        this.setState({ articles: resolved.data }, () => console.log(this.state.articles))
      }));
  };

  render() {
    return (<div>
      <img src="https://remotelist.io/static/company/2110.gif" />
      <h1>Article Fetcher</h1>
      <ArticleList articles={this.state.articles} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
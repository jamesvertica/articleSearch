const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js')
const axios = require('axios');

let getArticlesByTopic = (topic, callback) => {
request.get({
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "da39c15d7cfe4590bd649545b367b09f",
    'q': topic,
    'sort': "newest",
    'hl': "true"
  },
}).then(data => {
            data.data.map(article => save.save(article))
        })
        .then(() => callback)
        .catch(err => console.log(err));;
};

module.exports.getArticlesByTopic = getArticlesByTopic;
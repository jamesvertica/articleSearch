const request = require('request');
const save = require('../database/index.js')
const axios = require('axios');

let getArticlesByTopic = (topic, callback) => {
    request({
        method: 'GET',
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
            'api-key': "da39c15d7cfe4590bd649545b367b09f",
            'q': topic,
            'sort': "newest",
            'hl': "true"
        },
    }, function(err, response, body) {
        body = JSON.parse(body);
        callback(body.response)
            //   console.log(body.response);
    })
}

module.exports.getArticlesByTopic = getArticlesByTopic;
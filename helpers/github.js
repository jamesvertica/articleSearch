const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js')
const axios = require('axios');

let getReposByUsername = (username) => {
    // TODO - Use the request module to request repos for a specific
    // user from the github API
    // The options object has been provided to help you out, 
    // but you'll have to fill in the URL
    axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
            'User-Agent': 'request',
            'Authorization': `token ${config.TOKEN}`
        }
    }).then(data => {
        data.data.map(repo => save.save(repo))
    }).catch(err => console.log(err));
}

module.exports.getReposByUsername = getReposByUsername;
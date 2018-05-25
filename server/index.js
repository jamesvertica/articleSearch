const express = require('express');
const bodyParser = require('body-parser');
const axios = ('axios');
const getReposByUserName = require('../helpers/github.js');
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function(req, res) {
    const callback = function(resolved) {
        res.send('complete')
    }
    getReposByUserName.getReposByUsername(req.body.term, callback)
});

app.get('/repos', function(req, res) {
    const cb = function(results) {
        res.send(results)
    }
    db.twentyFive(cb);
});

let port = 1128;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
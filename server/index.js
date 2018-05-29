const express = require('express');
const bodyParser = require('body-parser');
const getReposByUserName = require('../helpers/github.js');
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/articles', function(req, res) {
    const callback = function(resolved) {
        console.log(resolved.docs);
        resolved.docs.map(item => db.save(item));
        res.send(resolved);
    }
    getReposByUserName.getArticlesByTopic(req.body.topic, callback)
});

app.get('/articles', function(req, res) {
    const cb = function(results) {
        res.send(results);
    }
    db.twentyFive(cb);
});

let port = process.env.port || 3000;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
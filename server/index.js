const express = require('express');
const bodyParser = require('body-parser');
const axios = ('axios');
const getReposByUserName = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function(req, res) {
    getReposByUserName.getReposByUsername(req.body.term)
});

app.get('/repos', function(req, res) {

});

let port = 1128;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
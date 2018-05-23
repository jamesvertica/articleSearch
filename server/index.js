const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {
    // TODO - your code here!
    // This route should take the github username provided
    // and get the repo information from the github API, then
    // save the repo information in the database

    // axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
    // .then(function(response){
    //   console.log('saved successfully')
    // });  
});

app.get('/repos', function(req, res) {
    // TODO - your code here!
    // This route should send back the top 25 repos

    // axios.get('https://api.github.com/users/' + username)
    // .then(function(response){
    //   console.log(response.data); // ex.: { user: 'Your User'}
    //   console.log(response.status); // ex.: 200
    // });
});

let port = 1128;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
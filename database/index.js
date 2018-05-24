const axios = require('axios');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
    id: Number,
    repo_url: String,
    name: String,
    forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {

    Repo.create({
            id: repo.id,
            name: repo.name,
            forkCount: repo.forks_count,
            url: repo.html_url
        },

        function(err) {
            if (err) {
                console.log('error')
            }
        });
};

module.exports.save = save;
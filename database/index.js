const axios = require('axios');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = mongoose.Schema({
    id: Number,
    repo_url: String,
    name: String,
    forks_count: Number
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (repo) => {

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

const twentyFive = function(cb) {
    Repo.find().sort({ 'forkCount': 1 }).limit(25).then(results => cb(results));
};

module.exports.twentyFive = twentyFive;
module.exports.save = save;
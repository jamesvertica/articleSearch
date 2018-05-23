const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
    // TODO: your schema here!
    id: Number,
    name: String,
    full_name: String,
    owner: {
        repos_url: String,
    },
    forks_count: Number,

    //Potential Reqs
    //Many users to many repos
});

let Repo = mongoose.model('Repo', repoSchema);

let save = ( /* TODO */ ) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
}

module.exports.save = save;
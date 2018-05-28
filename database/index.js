const axios = require('axios');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');

const articleSchema = mongoose.Schema({
    print_headline: String,
    web_url: String,
    source: String,
    pub_date: Number,
    word_count: Number,
    uri: String,
    section_name: String
});

const Article = mongoose.model('Article', articleSchema);

const save = (article) => {

    Article.create({
    headline: print_headline,
    ur: article.web_url,
    source: article.source,
    published: article.pub_date,
    wordCount: article.word_count,
    uri: article.uri,
    section: article.section_name,
    });
}
// const twentyFive = function(cb) {
//     Article.find().sort({ 'forkCount': 1 }).limit(25).then(results => cb(results));
// };

// module.exports.twentyFive = twentyFive;
module.exports.save = save;
const axios = require('axios');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/help');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('AHHHHHHHHHHHHHHHHHHHHHHH', err)
})

db.once('open', () => console.log('NOT AHHHHHHHHHHHHHHH'))

const articleSchema = mongoose.Schema({
    headline: String,
    url: String,
    source: String,
    published: String,
    wordCount: Number,
    uri: String,
    section: String
});

const Article = mongoose.model('Article', articleSchema);

const save = (article) => {
    // console.log(article.headline, '------------------------')
    Article.create({
        headline: article.headline.print_headline,
        url: article.web_url,
        source: article.source,
        published: article.pub_date,
        wordCount: article.word_count,
        uri: article.uri,
        section: article.section_name,
    }, (err, stuff) => {
        if(err) console.log(err)
        else console.log('not err')
    });
}
const twentyFive = function (cb) {
    Article.find().sort({_id:-1}).limit(10).then(results => cb(results));
};

module.exports.twentyFive = twentyFive;
module.exports.save = save;
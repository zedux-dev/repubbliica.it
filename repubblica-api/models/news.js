const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

let schema = new mongoose.Schema({
    title: String,
    author: String,
    thumb: String,
    image: String,
    imageMeta: String,
    subtitle: String,
    content: String,
    slug: String,
    date: Date
});

schema.plugin(mongoosePaginate);

const model = mongoose.model('News', schema);

exports.model = model;
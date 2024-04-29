const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    username: String,
    password: String
});

const model = mongoose.model('User', schema);

exports.model = model;
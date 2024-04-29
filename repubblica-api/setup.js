const mongoose = require('mongoose');
const News = require('./models/news').model;
const User = require('./models/user').model;

mongoose.connect('mongodb://127.0.0.1:27017/repubbliica');

News.createCollection().then(function (collection) { 
    console.log('News collection is created!'); 
});

User.createCollection().then(function (collection) { 
    console.log('User collection is created!'); 
    mongoose.disconnect();
});
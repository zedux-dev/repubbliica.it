const mongoose = require('mongoose');
const News = require('../models/news').model;
const authorize = require('./auth').authorize;

mongoose.connect('mongodb://127.0.0.1:27017/repubbliica');

function insertNews(req, res) {
    let payload = JSON.parse(req.body.data);
    payload.data = new Date(payload.data);
    
    authorize(req, res).then(() => {
        News.insertMany([payload]).then(() => {
            return res.json({error: false });
        }).catch(err => {
            return res.json({error: true, message: "" });
        });
        
    }).catch(() => {
        return res.status(403).json({ error: true, message: "Error. Unauthorized." });
    });
}

function getNews(req, res) {
    authorize(req, res).then(() => {
        const options = {
            page: req.params.page,
            limit: 4
        };
    
        News.paginate({
            "$or": [
                { title: {"$regex": req.params.term, "$options": "i" }},
                { content: {"$regex": req.params.term, "$options": "i" }}
            ]
        }, options, function (err, results) {
            if(err) {
                return res.json({error: true, message: "" });
            }
    
            res.json({
                news: results.docs,
                nrows: results.totalDocs
            });

        });
        
    }).catch(() => {
        return res.status(403).json({ error: true, message: "Error. Unauthorized." });
    });
}

function updateNews(req, res) {
    authorize(req, res).then(() => {
        let payload = JSON.parse(req.body.data);
    
        if(payload.data) {
            payload.data = new Date(payload.data);
        }
        
        News.findByIdAndUpdate(req.params.id, payload, { new: true }).then(() => {
            return res.json({error: false });
        }).catch(err => {
            return res.json({error: true, message: "" });
        });
        
    }).catch(() => {
        return res.status(403).json({ error: true, message: "Error. Unauthorized." });
    });
}

function deleteNews(req, res) {
    authorize(req, res).then(() => {
        News.findOneAndDelete(req.params.id).then(() => {
            return res.json({error: false });
        }).catch(err => {
            return res.json({error: true, message: "" });
        });
        
    }).catch(() => {
        return res.status(403).json({ error: true, message: "Error. Unauthorized." });
    });
}

exports.updateNews = updateNews;
exports.getNews = getNews;
exports.insertNews = insertNews;
exports.deleteNews = deleteNews;
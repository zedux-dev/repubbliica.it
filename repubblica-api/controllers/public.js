const HTMLParser = require('node-html-parser');
const mongoose = require('mongoose');
const moment = require('moment');
const { text } = require('body-parser');
const News = require('../models/news').model;

async function getPodcast(req, res) {
    let data = await fetch("https://www.repubblica.it/podcast");
    let html = await data.text();
    const document = HTMLParser.parse(html);

    try {
        let title = document.querySelector('.entry__title').innerText.trim();
        let link = document.querySelector('.entry__title > a').getAttribute('href');
        let category = document.querySelector('.entry__overtitle').innerText.trim();
        let author = document.querySelector('.entry__author').innerText.trim().replace("di ", "");
    
        let podcast = {
            title: title,
            link: link,
            category: category,
            author: author
        }

        res.json(podcast);
    } catch(er) {
        res.json(null);
    }
}

async function getVideo(req, res) {
    try {
        let data = await fetch('https://video.repubblica.it');
        let html = await data.text();
        const document = HTMLParser.parse(html);
    
        let video = document.querySelector('.block_item');
        let title = video.querySelector('.entry_title').innerText.trim();
        let link = video.querySelector('.entry_title > a').getAttribute('href');
        let image = video.querySelector('img');
    
        let item = {
            title: title,
            link: link,
            image: null,
            author: null
        };
    
        if(image) {
            let src = image.getAttribute('src');
    
            if(src) {
                item.image = src;
            }
        }
    
        res.send(JSON.stringify(item));
    } catch(er) {
        res.json(null);
    }
}

async function search(req, res) {
    let data = await fetch('https://ricerca.repubblica.it/ricerca/repubblica?query=' + req.params.term + '&page=' + req.params.page);
    let html = await data.text();
    const document = HTMLParser.parse(html);

    let list = document.querySelector("#lista-risultati");

    if(!list) {
        return res.send(JSON.stringify({
            nres: 0,
            list: []
        }));
    }

    let articles = list.querySelectorAll('article');

    let nres;

    try {
        nres = parseInt(document.querySelector('#n-risultati > strong').innerText.trim().replace(',', ''));
    } catch (e) {
        nres = 0;
    }

    let news_list = [];

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

        results.docs.forEach(nn => {
            let d = new Date(nn.date);
            let link = "/cronaca/" + d.getFullYear() + "/" + String(d.getMonth()+1).padStart(2, '0') + "/" + String(d.getDate()).padStart(2, '0') + "/news/" + nn.slug;

            news_list.push({
                title: nn.title,
                link: link,
                image: nn.image,
                thumb: nn.thumb,
                imageMeta: nn.imageMeta,
                category: "Cronaca",
                author: nn.author,
            });
        });

        articles.forEach(art => {
            let title = art.querySelector('h1 > a').innerText.trim();
            let link = art.querySelector('h1 > a').getAttribute('href');
            let img = art.querySelector('img');
            let author = art.querySelector('.author');
    
            let row = {
                title: title,
                link: link,
                image: null,
            }
    
            if(author) {
                row.author = author.innerText.trim();
            }
    
            if(img) {
                let src = img.getAttribute('src');
                if(src) {
                    row.image = src;
                }
            }
            
            news_list.push(row);
        });
    
        res.send(JSON.stringify({
            nres: nres,
            list: news_list
        }));
    });
}

async function getNews(req, res) {
    let data = await fetch('https://www.repubblica.it/cronaca/' + req.params.page);
    let html = await data.text();
    const document = HTMLParser.parse(html);

    let news_list = [];

    const options = {
        page: req.params.page,
        limit: 4
    };

    News.paginate({}, options, function (err, results) {
        if(err) {
            return res.json({error: true, message: "" });
        }

        let entries = document.querySelectorAll('.entry.type-articolo');
        entries.forEach((entry) => {
            let category = entry.querySelector('.entry__overtitle');
            let title = entry.querySelector('.entry__title').innerText.trim();
            let link = entry.querySelector('.entry__title > a').getAttribute('href');
            let author = entry.querySelector('.entry__author');
            let image = entry.querySelector('img');
            
            let newz = {
                title: title,
                link: link,
                image: null,
                category: null,
                author: null
            }
            
            if(category) {
                newz.category = category.innerText.trim();
            }

            if(image) {
                let src = image.getAttribute("data-src");
                
                if(src) {
                    if(src.indexOf("gelestatic.it") !== -1) {
                        let parts = src.split("https:");
                        parts.forEach((ss) => {
                            if(ss.indexOf("gelestatic.it") === -1) {
                                newz.image = "https:" + ss;
                            }
                        });
                    }
                }
            }

            if(author) {
                newz.author = author.innerText.trim().replace("di ", "");
            }

            news_list.push(newz);
        });

        let temp = news_list.splice(4);

        results.docs.forEach(nn => {
            let d = new Date(nn.date);
            let link = "/cronaca/" + d.getFullYear() + "/" + String(d.getMonth()+1).padStart(2, '0') + "/" + String(d.getDate()).padStart(2, '0') + "/news/" + nn.slug;

            news_list.push({
                title: nn.title,
                link: link,
                image: nn.image,
                thumb: nn.thumb,
                imageMeta: nn.imageMeta,
                category: "Cronaca",
                author: nn.author,
            });
        });

        news_list = news_list.concat(temp);

        res.send(JSON.stringify(news_list));
    });
}

async function getSpecificNews(req, res) {
    if(!req.body || !req.body.url) {
        return res.json({
            error: true,
            message: "Error! Invalid url provided."
        });
    }

    let parts = req.body.url.split("/");

    if(parts.length != 7) {
        return res.json({
            error: true,
            message: "Error! Invalid url provided."
        });
    }

    let year = parts[2];
    let month = parts[3];
    let day = parts[4];
    let slug = parts[6];

    let date = year + "-" + month + "-" + day;
    let data = moment(date, "YYYY-MM-DD");

    News.findOne({
        slug: slug,
        date: {
            $gte: data.toDate(),
            $lte: moment(data).endOf('day').toDate()
        }
    }).then(result => {
        if(result) {
            res.json({
                error: false,
                data: result
            });
        } else {
            res.json({
                error: true
            });
        }
    }).catch(err => {
        res.json({
            error: true
        });
    });
}

exports.getPodcast = getPodcast;
exports.getNews = getNews;
exports.getVideo = getVideo;
exports.search = search;
exports.getSpecificNews = getSpecificNews;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const public = require('./controllers/public');
const private = require('./controllers/private');
const auth = require('./controllers/auth');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(cookieParser());

// public routes
app.get('/get-podcast', public.getPodcast);
app.get('/get-video', public.getVideo);
app.get('/get-news/:page', public.getNews);
app.get('/search/:term/:page', public.search);
app.post('/get-news-detail', public.getSpecificNews);

// auth routes
app.post("/login", auth.login);
app.get("/logout", auth.logout);
// app.post("/signup", auth.signup); //disabled by default

// private routes
app.get('/select-news/:term/:page', private.getNews);
app.post('/insert-news', private.insertNews);
app.post('/update-news/:id', private.updateNews);
app.delete('/delete-news/:id', private.deleteNews);

exports.app = app;
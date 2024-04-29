const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const User = require('../models/user').model;

mongoose.connect('mongodb://127.0.0.1:27017/repubbliica');

async function signup(req, res) {
    const { username, password } = req.body;

    let user = {
        username: username,
        password: password
    }

    let newuser = await User.insertMany([user]);
    newuser = newuser[0];
        
    let token;
    
    try {
        token = jwt.sign(
            {
                userId: newuser._id.toString(),
                username: newuser.username
            },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );
    } catch (err) {
        return res.status(500).send(JSON.stringify({
            error: true,
            message: "Error! Something went wrong."
        }));
    }
    
    res.status(201).json({
        success: true,
        data: {
            userId: newuser._id.toString(),
            username: newuser.username,
            token: token
        },
    });
}

async function login(req, res) {
    let { username, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ username: username });
    } catch {
        return res.status(500).send(JSON.stringify({
            error: true,
            message: "Error! Something went wrong."
        }));
    }
    
    if(!existingUser || existingUser.password != password) {
        return res.status(403).send(JSON.stringify({
            error: true,
            message: "Errore! Credenziali errate."
        }));
    }

    let token;

    try {
        // Creating jwt token
        token = jwt.sign(
            {
                userId: existingUser._id.toString(),
                username: existingUser.username
            },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );
    } catch (err) {
        return res.status(500).send(JSON.stringify({
            error: true,
            message: "Error! Something went wrong."
        }));
    }

    // setting httpOnly Cookie with bearer token
    res.cookie(['JWT_TOKEN=Bearer ' + token + ' secure; httponly; samesite=Strict;']);
    
    res.status(200).json({
        success: true,
        data: {
            userId: existingUser._id.toString(),
            username: existingUser.username,
            token: token,
        },
    });
}

function authorize(req, res) {
    return new Promise((resolve, reject) => {
        let token = null;

        const cookies = req.cookies;
        if(cookies.JWT_TOKEN) token = cookies.JWT_TOKEN;

        if(!token) {
            return reject();
        }
    
        token = token.split(' ')[1];
    
        // Authorization: 'Bearer TOKEN'
        if(!token) {
            return reject();
        }
        // Decoding the token
        try {
            const decodedToken = jwt.verify(token, "secretkeyappearshere");
        } catch(err) {
            return reject();
        }
    
        resolve();
    });
}

function logout(req, res) {
    res.clearCookie("JWT_TOKEN");
    res.end();
}

exports.login = login;
exports.signup = signup;
exports.authorize = authorize;
exports.logout = logout;
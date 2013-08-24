/*
* 資料庫模組
*/

"use strict";

var mongoose = require('mongoose'),
    CONFIG,
    schema = {},
    models = {};
    
try {
    CONFIG = require('../config/app.json');
} catch (ex) {
    console.info('Cannot Find Config File. Use Enviornment Variables');
    CONFIG = {
        connStr: process.env.connStr
    };
}
    
mongoose.connect(CONFIG.connStr, function(err) {
    if (err) throw err;
    console.info('Connected MongoHQ Service.');
});
    
schema.Article = new mongoose.Schema({
    title: String,
    subTitle: String,
    body: String
});

models.Article = mongoose.model("Article", schema.Article);

schema.User = new mongoose.Schema({
    account: String,
    password: String,
    name: String,
    role: String
});

models.User = mongoose.model("User", schema.User);

// 榜定 Models
exports.bindDB = function (req, res, next) {
    req.dbModel = models;
    next();
}
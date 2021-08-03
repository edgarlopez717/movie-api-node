'use strict';

//Create database instances and export to be used the repositories
const environment = require('./environment');
const sqlite3 = require('sqlite3').verbose();
const movieDb = new sqlite3.Database(enviroment.db.movieDb);
const ratingDb = new sqlite3.Database(environment.db.ratingDb);

module.exports = {
    movieDb, ratingDb
};
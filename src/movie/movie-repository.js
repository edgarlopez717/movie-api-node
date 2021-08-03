'use strict';

//const movieDb = require('./../configuration/sqlite-db').movieDb;
const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();
const config = require('./../configuration/knexfile-movies-db')
const db = knex(config.development);

module.exports = {
    findMovies(resultsPerPage, pageNumber) {
        return db('movies').paginate({
            perPage:resultsPerPage, 
            currentPage:pageNumber
        });
    }
}


'use strict';

const movieRepo = require('./movie-repository');

module.exports = {
    async getAllMovies(resultsPerPage, pageNumber){
        return await movieRepo.findMovies(resultsPerPage, pageNumber);
    }
};
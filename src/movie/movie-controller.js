'use strict';
const movieService = require('./movie-service');
const env = require('./../configuration/environment');

module.exports = {
    async getAllMovies(req, res) {
        const pageNumber = req.query.pageNumber;
        const movies = await movieService.getAllMovies(env.pagination.resultsPerPage, pageNumber);

        res.json(movies);
        //res.send(movies);
        
    }
};
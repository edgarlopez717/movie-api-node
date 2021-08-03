'use strict';
const express = require('express');
const router = express.Router();
const movieController = require('./movie-controller');

// defines the route that lists the movies
router.get('/movies', movieController.getAllMovies)

module.exports = router;
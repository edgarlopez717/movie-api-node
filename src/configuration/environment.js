'use strict';

module.exports = {
    server : {
        portNumber : process.env.SERVER_PORT
    },

    db: {
        movieDBLocation : process.env.MOVIE_DB,
        ratingDBLocation : process.env.RATING_DB
    },

    pagination : {
        resultsPerPage : process.env.RESULTS_PER_PAGE
    }
};
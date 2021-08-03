'use strict';
const express = require('express');
const routes = require('./../movie/movie-routes');
const app = express();

module.exports = {

    /**
     * Starts the express server on the specified port.
     * @param {*} portNumber The port number.
     * @returns Returns the server object as a promise.
     */
    async start(portNumber) {
        //Configure the server
        app.use(routes); //Add the routes
        //Add validation

        //Start listening on a port number
        app.listen(portNumber, () => {
            console.log(`Movie app listening on port ${portNumber}!`)
          });

        return app;
    }
}
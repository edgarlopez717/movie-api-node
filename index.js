'use strict';

//Set enviromental variables 
require('dotenv').config();
const environment = require('./src/configuration/environment');

//Start the express server
const server = require('./src/configuration/express-server');
const a = environment.server.portNumber;
server.start(environment.server.portNumber)
    .catch(() => {
        console('Unable to start express server using port number ' + environment.server.portNumber);
        process.exit(1);
    });
// Update with your config settings.
const environment = require('./environment');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: environment.db.ratingDBLocation
    },
    useNullAsDefault: true
  }
};

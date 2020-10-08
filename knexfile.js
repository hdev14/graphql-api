// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  migrations: {
    directory: './src/migrations',
  },
  connection: {
    filename: './dev.sqlite3'
  },

};

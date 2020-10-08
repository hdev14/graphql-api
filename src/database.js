const knexfile = require('../knexfile')
const knex = require('knex')

const connection = knex(knexfile)

module.exports = connection

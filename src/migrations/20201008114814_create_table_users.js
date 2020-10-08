
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name', 80).notNullable()
    table.string('email', 80).notNullable()
    table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.droptTable('users')
};

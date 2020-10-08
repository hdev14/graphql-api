const bcrypt = require('bcrypt')
const connection = require('./database')

module.exports = {
  Query: {
    user: async (_, { id }) => {
      return await connection('users').where({ id }).first()
    },

    users: async () => {
      return await connection('users')
    }
  },

  Mutation: {
    createUser: async (_, { input }) => {
      input.password = await bcrypt.hash(input.password, 16)
      const result = await connection('users').insert(input)
      const userId = result[0]
      const user = await connection('users').where({ id: userId }).first()

      return user
    },

    updateUser: async (_, { id, input }) => {
      const result = await connection('users').where({ id }).update(input)
      return !!result
    },

    deleteUser: async (_, { id }) => {
      const result = await connection('users').where({ id }).del()
      return !!result
    }
  }
}

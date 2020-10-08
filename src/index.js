const express = require('express')
const expressGraphql = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

const server = express()

const schema = makeExecutableSchema({typeDefs, resolvers })

server.use('/graphql', expressGraphql.graphqlHTTP({
  schema,
  graphiql: true,
}))

server.listen(4000, () => console.log('Server is running'))

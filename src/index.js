const express = require('express')
const expressGraphql = require('express-graphql')

const server = express()

server.use('/graphql', expressGraphql.graphqlHTTP({
  graphiql: true,
}))

server.listen(4000, () => console.log('Server is running'))

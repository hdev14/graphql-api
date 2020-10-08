module.exports = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input CreateUserInput {
    name: String!,
    email: String!,
    password: String!
  }

  input UpdateUserInput {
    name: String,
    email: String,
    password: String
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(id: ID!, input: UpdateUserInput): Boolean
    deleteUser(id: ID!): Boolean
  }
`

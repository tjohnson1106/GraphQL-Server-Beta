export default `
   type Status {
  message: String!
}
 
scalar Date

type Tweet {
  _id: ID!
  text: String!
  createdAt: Date!
  updatedAt: Date!
}

 type Query {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
  
   
    
  }

  schema {
    query: Query
    mutation: Mutation
  }

  type Mutation {
  createTweet(text: String!): Tweet
  updateTweet(_id: ID!, text: String): Tweet
  deleteTweet(_id: ID!): Status
  signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
  login(email: String!, password: String!): User
 
 
}

type User {
  _id: ID!
  username: String
  email: String!
  firstName: String
  lastName: String
  avatar: String
  createdAt: Date!
  updatedAt: Date!
  
}


 
`;



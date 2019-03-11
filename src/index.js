import {GraphQLServer} from 'graphql-yoga';


// typeDef's is the schema , where you can mention the queries and mutation and their return types 
const typeDefs = `
   type Query{
        hello: String!
    }
`;

// resolvers will resolve for the queries and mutations , it just returns a data matching the type . 
const resolvers = {
    Query: {
        hello(){
            return 'initial server setup'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('app is running on port 4000'))
  
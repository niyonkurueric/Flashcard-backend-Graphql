
import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDef';

const startServer = (): void => {
  new ApolloServer({ 
     typeDefs,
    resolvers,}).listen().then(({ url }) => {
      console.log(`server is running ${url}`);
  });
};
export default startServer;
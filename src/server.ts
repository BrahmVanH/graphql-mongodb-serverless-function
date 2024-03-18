import { ApolloServer } from '@apollo/server';
import typeDefs from './schema';
import resolvers from './resolvers';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	csrfPrevention: true,
});

export const handler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler());



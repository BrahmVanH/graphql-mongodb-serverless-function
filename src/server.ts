import { ApolloServer } from '@apollo/server';
import typeDefs from './schema';
import resolvers from './resolvers';
import { startServerAndCreateLambdaHandler, handlers, middleware } from '@as-integrations/aws-lambda';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
});

// const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
const allowedOrigins = ['http://localhost:5173'];
// 'https://main--weekly-journal.netlify.app/', 'https://weekly-journal.netlify.app',
const requestHandler = handlers.createAPIGatewayProxyEventV2RequestHandler();

const corsMiddleware: middleware.MiddlewareFn<typeof requestHandler> = async (event) => {
	console.log('cors middleware activating');
	const origin = event.headers.origin;
	console.log('event', event);
	console.log('origin', origin);
	if (origin && allowedOrigins.includes(origin)) {
		console.log('origin allowed: ', origin);
		return (result) => {
			console.log('result', result);
			console.log('setting headers');
			result.headers = {
				...result.headers,
				'Access-Control-Allow-Origin': origin,
				Vary: 'Origin',
			};
			return Promise.resolve();
		};
	}
	return () => Promise.resolve();
};

export const handler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler(), {
	middleware: [corsMiddleware],
});

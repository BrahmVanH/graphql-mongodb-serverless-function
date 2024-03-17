import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { ApolloServer } from 'apollo-server';

// import { connect, set } from 'mongoose';

import { EntryModel } from './mongo/model';

import typeDefs from './schema';
import resolvers from './resolvers';

// const connectToDb = async () => {
// 	const MONGODB_URI = process.env.MONGODB_URI ?? '';

// 	try {
// 		set('strictQuery', true);
// 		await connect(MONGODB_URI).then(() => console.log('Connected to MongoDB'));
// 	} catch (error) {
// 		console.error('Error connecting to MongoDB', error);
// 		throw new Error('Error connecting to MongoDB');
// 	}
// };

const createLambdaServer = () => {
	console.log('Creating Lambda Server');
	const server = new ApolloServerLambda({
		typeDefs,
		resolvers,
		introspection: true,
		nodeEnv: 'development',
	});
	console.log('Lambda Server created: ', server);
	return server;
};

const createLocalServer = () =>
	new ApolloServer({
		typeDefs,
		resolvers,
		introspection: true,
		cors: {
			origin: '*',
			credentials: true,
		},
	});

export { createLambdaServer, createLocalServer };

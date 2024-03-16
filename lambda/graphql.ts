import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createLambdaServer } from './bundle/server';

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
	console.log('event: ', event?.resource);
	const server = createLambdaServer();
	event.headers = {
		'Access-Control-Allow-Origin': '*',
	};
	console.log('server: ', server);
	return new Promise((resolve, reject) => {
		const cb = (error: string | Error | null | undefined, args: any) => (error ? reject(error) : resolve(args));

		// const handler = server.createHandler();
		// console.log('handler: ', handler);
		// handler(event, context, cb);
		server.createHandler()(event, context, cb);
	});
};

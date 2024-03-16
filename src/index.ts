import { createLocalServer } from './server';
import { configDotenv } from 'dotenv';

configDotenv();

const port = process.env.PORT || 4000;

const server = createLocalServer();

console.log('Starting server', server);

server.listen(port).then(({ url }) => {
	console.log(`Server is running at ${url}`);
});

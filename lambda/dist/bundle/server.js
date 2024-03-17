"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalServer = exports.createLambdaServer = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
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
    const server = new apollo_server_lambda_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        introspection: true,
        nodeEnv: 'development',
    });
    console.log('Lambda Server created: ', server);
    return server;
};
exports.createLambdaServer = createLambdaServer;
const createLocalServer = () => new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    introspection: true,
    cors: {
        origin: '*',
        credentials: true,
    },
});
exports.createLocalServer = createLocalServer;
//# sourceMappingURL=server.js.map
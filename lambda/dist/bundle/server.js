"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalServer = exports.createLambdaServer = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const apollo_server_1 = require("apollo-server");
const mongoose_1 = require("mongoose");
const model_1 = __importDefault(require("./model"));
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const MONGODB_URI = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : 'mongodb://127.0.0.1:27017/securitiesTracker';
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Connecting to database');
    if (!MONGODB_URI) {
        throw new Error('MONGO_URI not found');
    }
    try {
        yield (0, mongoose_1.connect)(MONGODB_URI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to database', error);
    }
});
const createLambdaServer = () => {
    console.log('Creating Lambda Server');
    const server = new apollo_server_lambda_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        introspection: true,
        nodeEnv: 'development',
        context: () => __awaiter(void 0, void 0, void 0, function* () {
            yield connectToDb();
            return {
                models: {
                    EntryModel: model_1.default,
                },
            };
        }),
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
    context: () => __awaiter(void 0, void 0, void 0, function* () {
        yield connectToDb();
        return {
            models: {
                EntryModel: model_1.default,
            },
        };
    }),
});
exports.createLocalServer = createLocalServer;
//# sourceMappingURL=server.js.map
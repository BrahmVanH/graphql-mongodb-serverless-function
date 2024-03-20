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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const server_1 = require("@apollo/server");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const aws_lambda_1 = require("@as-integrations/aws-lambda");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = new server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    introspection: true,
});
// const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
const allowedOrigins = ['http://localhost:5173'];
// 'https://main--weekly-journal.netlify.app/', 'https://weekly-journal.netlify.app',
const requestHandler = aws_lambda_1.handlers.createAPIGatewayProxyEventV2RequestHandler();
const corsMiddleware = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cors middleware activating');
    const origin = event.headers.origin;
    console.log('event', event);
    console.log('origin', origin);
    if (origin && allowedOrigins.includes(origin)) {
        console.log('origin allowed: ', origin);
        return (result) => {
            console.log('result', result);
            console.log('setting headers');
            result.headers = Object.assign(Object.assign({}, result.headers), { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' });
            return Promise.resolve();
        };
    }
    else {
        // Reject requests from disallowed origins
        console.log('origin not allowed: ', origin);
        return (result) => {
            result.statusCode = 403; // Forbidden status code
            result.body = 'Origin not allowed';
            return Promise.resolve();
        };
    }
});
exports.handler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server, aws_lambda_1.handlers.createAPIGatewayProxyEventV2RequestHandler(), {
    middleware: [corsMiddleware],
});
//# sourceMappingURL=server.js.map
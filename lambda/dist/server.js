"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const server_1 = require("@apollo/server");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const aws_lambda_1 = require("@as-integrations/aws-lambda");
const server = new server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    introspection: true,
    csrfPrevention: true,
});
exports.handler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server, aws_lambda_1.handlers.createAPIGatewayProxyEventV2RequestHandler());
//# sourceMappingURL=server.js.map
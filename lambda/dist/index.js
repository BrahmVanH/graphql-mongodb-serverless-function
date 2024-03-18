"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const apollo_server_1 = require("apollo-server");
(0, dotenv_1.configDotenv)();
const port = process.env.PORT || 4000;
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    introspection: true,
});
console.log('Starting server', server);
server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map
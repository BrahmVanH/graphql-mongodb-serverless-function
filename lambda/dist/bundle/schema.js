"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const typeDefs = (0, apollo_server_lambda_1.gql) `
	scalar Date

	type Entry {
		date: Date
		financial: Int
		fitness: Int
		dietary: Int
		social: Int
		professional: Int
	}
	type Query {
		allEntries: [Entry]
	}

	type Mutation {
		createEntry(financial: Int, fitness: Int, dietary: Int, social: Int, professional: Int): Entry
	}
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map
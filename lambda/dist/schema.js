"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `#graphql
	scalar Date

	type SecuritiesRating {
		financial: Int
		fitness: Int
		dietary: Int
		mental: Int
		social: Int
		professional: Int
	}

	type Entry {
		_id: ID
		date: Date
		text: String
		securitiesRating: SecuritiesRating
	}

	input SecuritiesRatingInput {
		financial: Int
		fitness: Int
		dietary: Int
		mental: Int
		social: Int
		professional: Int
	}

	input EntryInput {
		text: String
		securitiesRating: SecuritiesRatingInput
	}
	type Query {
		allEntries: [Entry]
		getEntry(_id: ID!): Entry
	}

	type Mutation {
		createEntry(entry: EntryInput): Entry
	}
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map
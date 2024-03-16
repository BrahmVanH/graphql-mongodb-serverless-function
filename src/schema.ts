import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
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

export default typeDefs;

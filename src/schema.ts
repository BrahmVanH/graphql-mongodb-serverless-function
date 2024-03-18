const typeDefs = `#graphql
	scalar Date

	type SecuritiesRating {
		financial: Int
		fitness: Int
		dietary: Int
		social: Int
		professional: Int
	}

	type Entry {
		id: ID
		date: Date
		text: String
		securitiesRating: SecuritiesRating
	}
	type Query {
		allEntries: [Entry]
	}

	type Mutation {
		createEntry(financial: Int, fitness: Int, dietary: Int, social: Int, professional: Int): Entry
	}
`;

export default typeDefs;

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
		id: ID
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
	}

	type Mutation {
		createEntry(entry: EntryInput): Entry
	}
`;

export default typeDefs;

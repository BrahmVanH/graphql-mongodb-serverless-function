import { connectToDb } from './mongo/db';
import { Entry, Resolvers } from './generated/graphql';
import { EntryModel } from './mongo/model';

const resolvers = {
	Query: {
		allEntries: async () => {
			console.log('allEntries');
			try {
				await connectToDb();

				const entries = await EntryModel.find().exec();

				if (!entries) {
					throw new Error('No entries found in db');
				}
				console.log('allEntries entries: ', entries);
				return entries;
			} catch (err) {
				console.error('>allEntries error', err);
				throw new Error('There was an error in retrieving entries from db');
			}
		},
	},
	Mutation: {
		createEntry: async (_: {}, args: Entry, __: any) => {
			console.log('createEntry args: ', args);
			// const { financial, fitness, dietary, social, professional } = args;
			if (!args.securitiesRating || !args.text) {
				console.log('args.securitiesRating: ', args.securitiesRating);
				throw new Error('No securitiesRating or text provided');
			}

			const text = args.text;

			try {
				await connectToDb();
				const newEntry = await EntryModel.create({ securitiesRating: args.securitiesRating, text, date: new Date() });

				if (newEntry) {
					console.log('newEntry: ', newEntry);
				}

				return newEntry;
			} catch (err) {
				console.error('> createEntry error: ', err);

				throw new Error('Error in creating new entry');
			}
		},
	},
};

export default resolvers;

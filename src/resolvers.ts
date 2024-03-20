import { connectToDb } from './mongo/db';
import { Entry, EntryInput, Resolvers } from './generated/graphql';
import { EntryModel } from './mongo/model';
import { ICreateEntryArgs } from './types';

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
		createEntry: async (_: {}, args: ICreateEntryArgs, __: any) => {
			try {
				await connectToDb();
				const entry = args.entry as EntryInput;

				// const { financial, fitness, dietary, social, professional } = args;
				if (!entry.securitiesRating || !entry.text) {
					console.error('No securitiesRating or text provided');
					throw new Error('No securitiesRating or text provided');
				}

				const text = entry.text;
				const securitiesRating = entry.securitiesRating;

				const newEntry = await EntryModel.create({ securitiesRating, text, date: new Date() });

				if (!newEntry) {
					throw new Error('Error in creating new entry');
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

import { connectToDb } from './mongo/db';
import { Entry, EntryInput, MutationCreateEntryArgs, QueryGetEntryArgs, Resolvers } from './generated/graphql';
import { EntryModel } from './mongo/model';
import { ICreateEntryArgs } from './types';
import { get } from 'mongoose';

const resolvers: Resolvers = {
	Query: {
		allEntries: async () => {
			try {
				await connectToDb();

				const entries = await EntryModel.find().exec();

				if (!entries) {
					throw new Error('No entries found in db');
				}
				return entries;
			} catch (err) {
				console.error('>allEntries error', err);
				throw new Error('There was an error in retrieving entries from db');
			}
		},
		getEntry: async (_: {}, args: QueryGetEntryArgs, __: any) => {
			try {
				await connectToDb();

				const entry = await EntryModel.findById(args._id).exec();

				if (!entry) {
					throw new Error('No entry found in db');
				}
				return entry;
			} catch (err) {
				console.error('>getEntry error', err);
				throw new Error('There was an error in retrieving entry from db');
			}
		}
	},
	Mutation: {
		createEntry: async (_: {}, args: MutationCreateEntryArgs, __: any) => {
			try {
				await connectToDb();
				const entry = args.entry as EntryInput;

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

import { ApolloError } from 'apollo-server-lambda';
import { Resolvers } from './generated/graphql';
import { connectToDb } from './mongo/db';
import { EntryModel } from './mongo/model';
import { IEntry } from './types';

const resolvers: Resolvers = {
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
		createEntry: async (_: {}, args, __: any) => {
			console.log('createEntry args: ', args);
			const { financial, fitness, dietary, social, professional } = args;
			try {
				await connectToDb();
				const newEntry = await EntryModel.create({
					date: new Date(),
					financial,
					fitness,
					dietary,
					social,
					professional,
				});

				return newEntry;
			} catch (err) {
				console.error('> createEntry error: ', err);

				throw new ApolloError('Error in creating new entry');
			}
		},
	},
};

export default resolvers;

import { ApolloError } from 'apollo-server-lambda';
import { Resolvers } from './generated/graphql';
import { connectToDb } from './server';
import getEntryModel, { EntryModel } from './model';
import { IEntry } from './types';

const resolvers: Resolvers = {
	Query: {
		allEntries: async () => {
			console.log('allEntries');
			try {
				await connectToDb();

				// const entries = await EntryModel.find().exec();

				const EntryActions = await getEntryModel();

				if (!EntryActions) {
					throw new Error('Error getting Entry Actions');
				}
				const entries: IEntry[] | undefined = await EntryActions.find().exec();

				if (entries) {
					return entries;
				}
			} catch (err) {
				console.error('>allEntries error', err);
				throw new Error('There was an error in retrieving entries from db');
			}
		},
	},
	Mutation: {
		createEntry: async (_: {}, args, { models }: any) => {
			console.log('createEntry args: ', args);
			const { financial, fitness, dietary, social, professional } = args;
			try {
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

import {set, connect} from 'mongoose';
import { EntryModel } from './model';
import {Entry } from '../generated/graphql';

export const connectToDb = async () => {
	const MONGODB_URI = process.env.MONGODB_URI ?? '';

	try {
		set('strictQuery', true);
		await connect(MONGODB_URI).then(() => console.log('Connected to MongoDB'));
	} catch (error) {
		console.error('Error connecting to MongoDB', error);
		throw new Error('Error connecting to MongoDB');
	}
};

export const findEntries = async () => {
  console.log('allEntries');
			try {

        await connectToDb();

				const entries = await EntryModel.find().exec() as Entry[];

				if (!entries) {
					throw new Error('No entries found in db');
				}
				console.log('allEntries entries: ', entries);
				return entries;
			} catch (err) {
				console.error('>allEntries error', err);
				throw new Error('There was an error in retrieving entries from db');
			}}


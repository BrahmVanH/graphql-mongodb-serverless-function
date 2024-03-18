import { set, connect } from 'mongoose';

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

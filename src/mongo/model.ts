import { model, Schema } from 'mongoose';
// import { IEntry } from '../types';
import { Entry } from '../generated/graphql';

const entrySchema: Schema = new Schema<Entry>({
	date: {
		type: Date,
	},
	financial: {
		type: Number,
	},
	fitness: {
		type: Number,
	},
	dietary: {
		type: Number,
	},
	social: {
		type: Number,
	},
	professional: { type: Number },
});

export const EntryModel = model<Entry>('Entry', entrySchema);

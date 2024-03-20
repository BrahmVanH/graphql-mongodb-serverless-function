import { model, Schema } from 'mongoose';
import { IEntry, ISecuritiesRating } from '../types';


const securitiesRatingSchema: Schema = new Schema<ISecuritiesRating>({
	financial: {
		type: Number,
		required: true,
	},
	fitness: {
		type: Number,
		required: true,
	},
	mental: {
		type: Number,
		required: true,
	},
	dietary: {
		type: Number,
		required: true,
	},
	social: {
		type: Number,
		required: true,
	},
	professional: {
		type: Number,
		required: true,
	},
});

const entrySchema: Schema = new Schema<IEntry>({
	text: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	securitiesRating: {
		type: securitiesRatingSchema,
		required: true,
	},
});

export const EntryModel = model<IEntry>('Entry', entrySchema);

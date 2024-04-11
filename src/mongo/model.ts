import { model, Schema } from 'mongoose';
import { Entry, SecuritiesRating } from '../generated/graphql';


const securitiesRatingSchema: Schema = new Schema<SecuritiesRating>({
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

const entrySchema: Schema = new Schema<Entry>({
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

export const EntryModel = model<Entry>('Entry', entrySchema);

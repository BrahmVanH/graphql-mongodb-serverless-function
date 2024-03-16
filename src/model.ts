import { Model, model, models, Schema } from 'mongoose';
import { IEntry } from './types';

const entrySchema: Schema = new Schema<IEntry>({
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

export const EntryModel = model<IEntry>('Entry', entrySchema);

const getEntryModel = async () => {
	let entryModel: Model<IEntry>;
	try {
		if (!models.Entry) {
			entryModel = model<IEntry>('Entry', entrySchema);
		} else {
			entryModel = model<IEntry>('Entry');
		}
		return entryModel;
	} catch (error) {
		console.error('Error getting Entry model', error);
	}
};

export default getEntryModel;

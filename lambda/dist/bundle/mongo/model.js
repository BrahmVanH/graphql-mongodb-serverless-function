"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModel = void 0;
const mongoose_1 = require("mongoose");
const entrySchema = new mongoose_1.Schema({
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
exports.EntryModel = (0, mongoose_1.model)('Entry', entrySchema);
// const getEntryModel = async () => {
// 	let entryModel: Model<IEntry>;
// 	try {
// 		if (!models.Entry) {
// 			entryModel = model<IEntry>('Entry', entrySchema);
// 		} else {
// 			entryModel = model<IEntry>('Entry');
// 		}
// 		return entryModel;
// 	} catch (error) {
// 		console.error('Error getting Entry model', error);
// 	}
// };
// export default getEntryModel;
//# sourceMappingURL=model.js.map
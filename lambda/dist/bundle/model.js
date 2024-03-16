"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const EntryModel = (0, mongoose_1.model)('Entry', entrySchema);
exports.default = EntryModel;
//# sourceMappingURL=model.js.map
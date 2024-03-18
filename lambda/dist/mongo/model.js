"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModel = void 0;
const mongoose_1 = require("mongoose");
// import { Entry } from '../generated/graphql';
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
//# sourceMappingURL=model.js.map
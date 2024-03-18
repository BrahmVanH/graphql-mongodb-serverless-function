"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModel = void 0;
const mongoose_1 = require("mongoose");
// import { Entry } from '../generated/graphql';
const securitiesRatingSchema = new mongoose_1.Schema({
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
const entrySchema = new mongoose_1.Schema({
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
exports.EntryModel = (0, mongoose_1.model)('Entry', entrySchema);
//# sourceMappingURL=model.js.map
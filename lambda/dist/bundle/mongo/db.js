"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEntries = exports.connectToDb = void 0;
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const MONGODB_URI = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : '';
    try {
        (0, mongoose_1.set)('strictQuery', true);
        yield (0, mongoose_1.connect)(MONGODB_URI).then(() => console.log('Connected to MongoDB'));
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw new Error('Error connecting to MongoDB');
    }
});
exports.connectToDb = connectToDb;
const findEntries = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('allEntries');
    try {
        yield (0, exports.connectToDb)();
        const entries = yield model_1.EntryModel.find().exec();
        if (!entries) {
            throw new Error('No entries found in db');
        }
        console.log('allEntries entries: ', entries);
        return entries;
    }
    catch (err) {
        console.error('>allEntries error', err);
        throw new Error('There was an error in retrieving entries from db');
    }
});
exports.findEntries = findEntries;
//# sourceMappingURL=db.js.map
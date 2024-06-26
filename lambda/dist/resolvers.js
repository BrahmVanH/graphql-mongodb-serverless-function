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
const db_1 = require("./mongo/db");
const model_1 = require("./mongo/model");
const resolvers = {
    Query: {
        allEntries: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield (0, db_1.connectToDb)();
                const entries = yield model_1.EntryModel.find().exec();
                if (!entries) {
                    throw new Error('No entries found in db');
                }
                return entries;
            }
            catch (err) {
                console.error('>allEntries error', err);
                throw new Error('There was an error in retrieving entries from db');
            }
        }),
        getEntry: (_, args, __) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield (0, db_1.connectToDb)();
                const entry = yield model_1.EntryModel.findById(args._id).exec();
                if (!entry) {
                    throw new Error('No entry found in db');
                }
                return entry;
            }
            catch (err) {
                console.error('>getEntry error', err);
                throw new Error('There was an error in retrieving entry from db');
            }
        })
    },
    Mutation: {
        createEntry: (_, args, __) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield (0, db_1.connectToDb)();
                const entry = args.entry;
                if (!entry.securitiesRating || !entry.text) {
                    console.error('No securitiesRating or text provided');
                    throw new Error('No securitiesRating or text provided');
                }
                const text = entry.text;
                const securitiesRating = entry.securitiesRating;
                const newEntry = yield model_1.EntryModel.create({ securitiesRating, text, date: new Date() });
                if (!newEntry) {
                    throw new Error('Error in creating new entry');
                }
                return newEntry;
            }
            catch (err) {
                console.error('> createEntry error: ', err);
                throw new Error('Error in creating new entry');
            }
        }),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map
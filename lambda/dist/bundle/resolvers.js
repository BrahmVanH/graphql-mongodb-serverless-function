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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const model_1 = __importDefault(require("./model"));
const resolvers = {
    Query: {
        allEntries: () => __awaiter(void 0, void 0, void 0, function* () {
            console.log('allEntries');
            try {
                const entries = yield model_1.default.find().exec();
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
        }),
    },
    Mutation: {
        createEntry: (_, args, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('createEntry args: ', args);
            const { financial, fitness, dietary, social, professional } = args;
            try {
                const newEntry = yield model_1.default.create({
                    date: new Date(),
                    financial,
                    fitness,
                    dietary,
                    social,
                    professional,
                });
                return newEntry;
            }
            catch (err) {
                console.error('> createEntry error: ', err);
                throw new apollo_server_lambda_1.ApolloError('Error in creating new entry');
            }
        }),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map
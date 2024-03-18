import { PluginDefinition } from 'apollo-server-core';
import { ConnectOptions } from 'mongoose';
import { EntryInput } from './generated/graphql';


interface  ISecuritiesRating {
	financial: number;
	fitness: number;
	mental: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IEntry {
	id?: string;
	date?: Date;
	text?: string;
	securitiesRating?: ISecuritiesRating;
}


export interface ICreateEntryArgs {
	entry: EntryInput;
}

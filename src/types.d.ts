import { PluginDefinition } from 'apollo-server-core';
import { ConnectOptions } from 'mongoose';

interface IConnectOptions extends ConnectOptions {
	useUnifiedTopology?: boolean;
	useCreateIndex?: boolean;
	useFindAndModify?: boolean;
}

interface ISecuritiesRating {
	financial: number;
	fitness: number;
	mental: number;
	dietary: number;
	social: number;
	professional: number;
}

export interface IEntry {
	text?: string;
	securitiesRating?: ISecuritiesRating;
}


export type TPluginDefinition = PluginDefinition & {
	playground: () => void;
};



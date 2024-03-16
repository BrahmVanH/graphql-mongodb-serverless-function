import { PluginDefinition } from 'apollo-server-core';
import { ConnectOptions } from 'mongoose';

interface IConnectOptions extends ConnectOptions {
	useUnifiedTopology?: boolean;
	useCreateIndex?: boolean;
	useFindAndModify?: boolean;
}

export interface IEntry extends Document {
	date?: Date;
	financial: number;
	fitness: number;
	dietary: number;
	social: number;
	professional: number;
}


export type TPluginDefinition = PluginDefinition & {
	playground: () => void;
};



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
exports.handler = void 0;
const server_1 = require("./bundle/server");
const handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('event: ', event === null || event === void 0 ? void 0 : event.resource);
    const server = (0, server_1.createLambdaServer)();
    event.headers = {
        'Access-Control-Allow-Origin': '*',
    };
    console.log('server: ', server);
    return new Promise((resolve, reject) => {
        const cb = (error, args) => (error ? reject(error) : resolve(args));
        // const handler = server.createHandler();
        // console.log('handler: ', handler);
        // handler(event, context, cb);
        server.createHandler()(event, context, cb);
    });
});
exports.handler = handler;
//# sourceMappingURL=graphql.js.map
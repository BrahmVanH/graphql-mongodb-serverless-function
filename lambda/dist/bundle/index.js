"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const port = process.env.PORT || 4000;
const server = (0, server_1.createLocalServer)();
console.log('Starting server', server);
server.listen(port).then(({ url }) => {
    console.log(`Server is running at ${url}`);
});
//# sourceMappingURL=index.js.map
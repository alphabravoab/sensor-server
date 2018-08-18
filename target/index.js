"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const db_1 = require("./db");
const sensors_1 = require("./controllers/sensors");
const Koa = require("koa");
const http_1 = require("http");
const IO = require("socket.io");
const app = new Koa();
const server = new http_1.Server(app.callback());
exports.io = IO(server);
const port = process.env.PORT || 4000;
routing_controllers_1.useKoaServer(app, {
    cors: true,
    controllers: [
        sensors_1.default
    ]
});
exports.io.on('connect', socket => {
    const name = socket.request.user.firstName;
    console.log(`User ${name} just connected`);
    socket.on('disconnect', () => {
        console.log(`User ${name} just disconnected`);
    });
});
db_1.default()
    .then(_ => {
    server.listen(port);
    console.log(`Listening on port ${port}`);
})
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map
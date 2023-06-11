"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
class Database {
    url = config_1.config.mongodb.url;
    port = config_1.config.mongodb.port;
    database = config_1.config.mongodb.database;
    get fullUrl() {
        return `${this.url}:${this.port}/${this.database}`;
    }
    _connect() {
        console.log(this.fullUrl);
        return mongoose_1.default.connect(this.fullUrl);
    }
}
const database = new Database();
exports.default = database;
//# sourceMappingURL=Database.js.map
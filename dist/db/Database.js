const mongoose = require("mongoose");
const config = require("../config/config");
class Database {
    constructor() {
        this.url = config.mongodb.url;
        this.port = config.mongodb.port;
        this.database = config.mongodb.database;
    }
    get fullUrl() {
        return `${this.url}:${this.port}/${this.database}`;
    }
    _connect() {
        return mongoose.connect(this.fullUrl);
    }
}
module.exports = new Database();
//# sourceMappingURL=Database.js.map
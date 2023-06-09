import mongoose from "mongoose";
import config from "../config";

class Database {
  url = config.mongodb.url;
  port = config.mongodb.port;
  database = config.mongodb.database;

  get fullUrl() {
    return `${this.url}:${this.port}/${this.database}`;
  }
  _connect() {
    return mongoose.connect(this.fullUrl);
  }
}

const database = new Database();

export default database;

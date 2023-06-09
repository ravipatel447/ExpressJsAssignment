declare const mongoose: any;
declare const config: any;
declare class Database {
    url: any;
    port: any;
    database: any;
    get fullUrl(): string;
    _connect(): any;
}

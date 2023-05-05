export default class DuplicateError extends Error {
    statusCode;
    entity;
    query;
    timestamp;
    constructor(entity, query) {
        super(`Duplicate entity of type ${entity} with following info: ${JSON.stringify(query)}`);
        this.name = "DuplicateError";
        this.statusCode = 409;
        this.entity = entity; // String 'user' for instance
        this.query = query;
        this.timestamp = new Date();
    }
}

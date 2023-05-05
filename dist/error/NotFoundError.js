export default class NotFoundError extends Error {
    statusCode;
    entity;
    query;
    timestamp;
    constructor(entity, query) {
        super(`Entity with type ${entity} not found with following query: ${JSON.stringify(query)}`);
        this.name = "NotFoundError";
        this.statusCode = 404;
        this.entity = entity; // String 'user' for instance
        this.query = query;
        this.timestamp = new Date();
    }
}

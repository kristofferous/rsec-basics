export default class NotFoundError extends Error {
    private statusCode: number;
    private entity: any;
    private query: any;
    private timestamp: Date;
    
    constructor(entity, query) {
        super(`Entity with type ${entity} not found with following query: ${JSON.stringify(query)}`);
        this.name = "NotFoundError";
        this.statusCode = 404;
        this.entity = entity; // String 'user' for instance
        this.query = query;
        this.timestamp = new Date()
    }
}
import {v4 as UUID} from "uuid"
import {AutoAccessor, AutoAccessors} from "../decorators/AutoAccessor.js";

export interface RequiredFields {
    id: UUID;
}
export class BaseEntity<T extends RequiredFields = RequiredFields> {
    @AutoAccessor()
    public id: UUID;
    constructor(id: UUID) {
        this.id = id;
    }
    async toJSON(exclude: string[] = []): Promise<{ [p: string]: any }> {
        return Object.entries(this).reduce(async (accPromise, [key, value]) => {
            const acc = await accPromise;
            if (this.hasOwnProperty(key) && typeof value !== "function" && !exclude.includes(key)) { // @ts-ignore
                acc[key] = value instanceof Promise ? await value : value;
            }
            return acc;
        }, Promise.resolve({}));
    }

    clone(): BaseEntity<T> {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), JSON.parse(JSON.stringify(this)));
    }

    toObject(): T {
        return JSON.parse(JSON.stringify(this)) as T;
    }
}
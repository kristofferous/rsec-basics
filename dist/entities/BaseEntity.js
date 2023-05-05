var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AutoAccessor } from "../decorators/AutoAccessor.js";
export class BaseEntity {
    id;
    constructor(id) {
        this.id = id;
    }
    async toJSON(exclude = []) {
        return Object.entries(this).reduce(async (accPromise, [key, value]) => {
            const acc = await accPromise;
            if (this.hasOwnProperty(key) && typeof value !== "function" && !exclude.includes(key)) { // @ts-ignore
                acc[key] = value instanceof Promise ? await value : value;
            }
            return acc;
        }, Promise.resolve({}));
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), JSON.parse(JSON.stringify(this)));
    }
    toObject() {
        return JSON.parse(JSON.stringify(this));
    }
}
__decorate([
    AutoAccessor()
], BaseEntity.prototype, "id", void 0);

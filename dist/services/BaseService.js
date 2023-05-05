export class BaseService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async insert(entity) {
        return await this.repository.insert(entity);
    }
    async fetchOne(q) {
        return await this.repository.fetchOne(q).catch(e => { throw e; });
    }
    async fetchAllBy(column, value) {
        return await this.repository.fetchAllBy(column, value).catch(e => { throw e; });
    }
    async fetchAll(...q) {
        return await this.repository.fetchAll(...q).catch(e => { throw e; });
    }
    async count() {
        return await this.repository.count().catch(e => { throw e; });
    }
    async countBy(column, value) {
        return await this.repository.countBy(column, value).catch(e => { throw e; });
    }
    async exists(...q) {
        return await this.repository.exists(...q).catch(e => { throw e; });
    }
    async existsBy(column, value) {
        return await this.repository.existsBy(column, value).catch(e => { throw e; });
    }
    async fetchOneBy(column, value) {
        return await this.repository.fetchOneBy(column, value).catch(e => { throw e; });
    }
    async fetchRange(offset, limit) {
        return await this.repository.fetchRange(offset, limit).catch(e => { throw e; });
    }
    async searchBy(column, value, options = { caseSensitive: false, wildcards: false }) {
        return await this.repository.searchBy(column, value, options).catch(e => { throw e; });
    }
    async fetchRangeBy(column, value, offset, limit) {
        return await this.repository.fetchRangeBy(column, value, offset, limit).catch(e => { throw e; });
    }
    async update(id, entity) {
        const current = await this.repository.fetchOne(id);
        if (!current)
            throw new Error(`Entity with id ${id} not found`);
        const updated = Object.assign(current, entity);
        return await this.repository.update(id, updated);
    }
    async delete(id) {
        return await this.repository.delete(id).catch(e => { throw e; });
    }
}

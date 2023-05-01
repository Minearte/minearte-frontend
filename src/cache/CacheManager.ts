import AbstractCache from './AbstractCache';
import RamMemCache from './RamMemCache';

export default class {
    private cache = new RamMemCache();

    public getCache(): AbstractCache {
        return this.cache;
    }
}
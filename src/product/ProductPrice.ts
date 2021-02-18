export interface ProductPriceData {
    current: number;
    old?: number;
}

export default class ProductPrice {
    private readonly _current: number;

    private readonly _old: number;

    constructor({ current, old }: ProductPriceData) {
        this._current = current;
        this._old = old || current;
    }

    get current() {
        return this._current;
    }

    get old() {
        return this._old;
    }

    isDiscounted(): boolean {
        return this._current < this._old;
    }
}

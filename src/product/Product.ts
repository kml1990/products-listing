import ProductPrice from './ProductPrice';

export interface ProductData {
    id: number;
    name: string;
    price: ProductPrice;
    available: boolean;
    quantity: number;
    lowOnStock: boolean;
    promotionBadge?: string;
    thumbnail: string;
}

export default class Product {
    private readonly _id: number;

    private readonly _name: string;

    private readonly _price: ProductPrice;

    private readonly _available: boolean;

    private readonly _quantity: number;

    private readonly _lowOnStock: boolean;

    private readonly _thumbnail: string;

    private readonly _promotionBadge?: string;

    constructor({ id, name, price, available, quantity, lowOnStock, promotionBadge, thumbnail }: ProductData) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._available = available;
        this._quantity = quantity;
        this._lowOnStock = lowOnStock;
        this._promotionBadge = promotionBadge || '';
        this._thumbnail = thumbnail;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get available() {
        return this._available;
    }

    get quantity() {
        return this._quantity;
    }

    get lowOnStock() {
        return this._lowOnStock;
    }

    get promotionBadge() {
        return this._promotionBadge;
    }

    get thumbnail() {
        return this._thumbnail;
    }
}

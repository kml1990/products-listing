import axios from 'axios';
import Product from '../../product/Product';
import { ProductsParser } from '../ProductParser';
import { ProductsProvider } from '../ProductProvider';
import MockyProductParser from './MockyProductParser';
import { MockyProduct } from './MockyTypes';

const MOCKY_PRODUCTS_ENDPOINT = 'https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e';

export default class MockyProductProvider implements ProductsProvider {
    private readonly _mockyProductParser: ProductsParser<MockyProduct>;

    constructor() {
        this._mockyProductParser = new MockyProductParser();
    }

    async fetchProducts(): Promise<Product[]> {
        const results = await axios.get(MOCKY_PRODUCTS_ENDPOINT);
        if (!results.data || results.status !== 200) {
            return [];
        }
        return this._mockyProductParser.parse(results.data);
    }
}

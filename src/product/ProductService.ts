import { ProductsProvider } from '../provider/ProductProvider';
import ArrayUtils from '../utils/ArrayUtils';
import Product from './Product';

export type Products = Map<number, Product>;

export default class ProductService {
    private readonly _products: Products;

    private readonly _productProvider: ProductsProvider;

    constructor(productProvider: ProductsProvider) {
        this._productProvider = productProvider;

        this._products = new Map();
    }

    async getProducts(): Promise<Product[]> {
        const products = await this._productProvider.fetchProducts();
        products.forEach(product => {
            this._products.set(product.id, product);
        });
        return ArrayUtils.mapValuesToArray(this._products);
    }

    removeProducts(productIds: number[]): Product[] {
        productIds.forEach(productId => {
            this._products.delete(productId);
        });
        return ArrayUtils.mapValuesToArray(this._products);
    }
}

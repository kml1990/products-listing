import Product from '../product/Product';

export interface ProductsProvider {
    fetchProducts(): Promise<Product[]>;
}

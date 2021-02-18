import Product from '../product/Product';

export interface ProductsParser<T> {
    parse(products: T[]): Product[];
}

import Product from '../../product/Product';
import ProductPrice from '../../product/ProductPrice';
import { ProductsParser } from '../ProductParser';
import { MockyProduct } from './MockyTypes';

export default class MockyProductParser implements ProductsParser<MockyProduct> {
    parse(products: MockyProduct[]): Product[] {
        return products.map(product => {
            const {
                productId: id,
                name,
                price: current,
                priceWas: old,
                available,
                quantity,
                lowOnStock,
                promotionBadge,
                imageUrl: thumbnail,
            } = product;

            return new Product({
                id,
                name,
                price: new ProductPrice({ current, old }),
                available: this.isProductAvailable(available),
                quantity,
                lowOnStock: this.isLowOnStock(lowOnStock),
                promotionBadge,
                thumbnail,
            });
        });
    }

    private isProductAvailable(available: string): boolean {
        return available === 'TRUE';
    }

    private isLowOnStock(lowOnStock: string): boolean {
        return lowOnStock === 'TRUE';
    }
}

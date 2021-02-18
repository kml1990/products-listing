import React, { ReactElement } from 'react';
import Product from '../../product/Product';

import './ProductStock.scss';

export interface ProductStockProps {
    product: Product;
}

const ProductStock: React.FC<ProductStockProps> = ({ product }): ReactElement => {
    const { available, quantity, lowOnStock } = product;

    if (!available || quantity === 0) {
        return <span className="ProductStock__stockOut">Out of stock</span>;
    }

    const stockQuantity = <span className="ProductStock__stockQuantity">{`${quantity} in stock`}</span>;

    if (lowOnStock) {
        return (
            <>
                {stockQuantity}
                <span className="ProductStock__stockLow">Low on stock</span>
            </>
        );
    }

    return stockQuantity;
};

export default ProductStock;

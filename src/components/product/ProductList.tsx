import React, { ReactElement } from 'react';
import Product from '../../product/Product';
import ProductListItem from './ProductListItem';

import './ProductList.scss';

export interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }): ReactElement => {
    return (
        <div className="ProductList">
            {products.map(product => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;

import React, { ReactElement } from 'react';
import ProductListItem from './ProductListItem';
import { useProducts } from './ProductContext';

import './ProductList.scss';

const ProductList: React.FC = (): ReactElement => {
    const { products } = useProducts();

    return (
        <div className="ProductList">
            {products.map(product => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;

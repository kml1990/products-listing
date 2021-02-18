import React, { ReactElement } from 'react';
import { useProducts } from '../product/ProductContext';
import ProductList from '../product/ProductList';
import Button from '../shared/button/Button';

import './Inventory.scss';

const Inventory: React.FC = (): ReactElement => {
    const { selectedProducts, onProductsRemoved } = useProducts();

    return (
        <div className="Inventory">
            <Button name={`Remove ${selectedProducts.size} selected products`} onClick={onProductsRemoved} />
            <ProductList />
        </div>
    );
};

export default Inventory;

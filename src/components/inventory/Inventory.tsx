import React, { ReactElement, useEffect, useState } from 'react';
import useInjection from '../../di/DependencyHook';
import DependencyType from '../../di/DependencyType';
import Product from '../../product/Product';
import ProductService from '../../product/ProductService';
import ProductList from '../product/ProductList';
import Button from '../shared/button/Button';

const Inventory: React.FC = (): ReactElement => {
    const productService = useInjection<ProductService>(DependencyType.ProductService);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

    useEffect(() => {
        let isLoadingProducts = true;
        productService.getProducts().then(fetchedProducts => {
            if (isLoadingProducts) {
                setProducts(fetchedProducts);
            }
        });
        return () => {
            isLoadingProducts = false;
        };
    }, []);

    const onSelectedProductsRemove = () => {
        console.log('test')
    };

    return (
        <div className="Inventory">
            <Button name={`Remove ${selectedProducts.length} selected products`} onClick={onSelectedProductsRemove} />
            <ProductList products={products} />
        </div>
    );
};

export default Inventory;

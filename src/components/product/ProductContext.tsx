import React, { createContext, useContext, useEffect, useState } from 'react';
import { noop } from 'lodash';
import useInjection from '../../di/DependencyHook';
import DependencyType from '../../di/DependencyType';
import Product from '../../product/Product';
import ProductService from '../../product/ProductService';
import ArrayUtils from '../../utils/ArrayUtils';

export type SelectedProducts = Set<number>;
export type OnProductSelected = (id: number) => void;
export type OnProductsRemoved = () => void;
export type OnClearSelected = () => void;

export interface ProductsContextProps {
    products: Product[];
    selectedProducts: SelectedProducts;
    onProductSelected: OnProductSelected;
    onProductsRemoved: OnProductsRemoved;
}

const DEFAULT_CONTEXT: ProductsContextProps = {
    products: [],
    selectedProducts: new Set(),
    onProductSelected: noop,
    onProductsRemoved: noop,
};

export const ProductsContext = createContext<ProductsContextProps>(DEFAULT_CONTEXT);

export const ProductsProvider: React.FC = ({ children }) => {
    const productService = useInjection<ProductService>(DependencyType.ProductService);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>(new Set());

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

    const addSelected = (id: number) => {
        setSelectedProducts(prev => new Set(prev.add(id)));
    };

    const removeUnselected = (id: number) => {
        setSelectedProducts(prev => new Set(ArrayUtils.setToArray(prev).filter(productId => productId !== id)));
    };

    const onProductSelected = (id: number) => {
        if (selectedProducts.has(id)) {
            removeUnselected(id);
            return;
        }
        addSelected(id);
    };

    const onProductsRemoved = () => {
        setProducts(productService.removeProducts(ArrayUtils.setToArray(selectedProducts)));
        setSelectedProducts(new Set());
    };

    const values = {
        products,
        selectedProducts,
        onProductSelected,
        onProductsRemoved,
    };

    return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export function useProducts(): ProductsContextProps {
    return useContext(ProductsContext);
}

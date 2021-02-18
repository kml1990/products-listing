import React, { ReactElement, useCallback, useMemo } from 'react';
import Product from '../../product/Product';
import StringUtils from '../../utils/StringUtils';
import Card from '../shared/card/Card';
import Selector from '../shared/selector/Selector';
import { useProducts } from './ProductContext';

import './ProductListItem.scss';
import ProductStock from './ProductStock';

export interface ProductListItemProps {
    product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }): ReactElement => {
    const { onProductSelected } = useProducts();
    const { id, name, price, thumbnail, promotionBadge } = product;
    const { current: currentPrice, old: oldPrice } = price;

    return (
        <Card className="ProductListItem" image={thumbnail} imageBadge={promotionBadge}>
            <Selector
                className="ProductListItem__selector"
                id={id.toString()}
                onSelected={() => onProductSelected(id)}
            />
            <h3 className="ProductListItem__name">{name}</h3>
            <h4 className="ProductListItem__price">
                <span className="ProductListItem__currentPrice">{StringUtils.toGBP(currentPrice)}</span>
                {price.isDiscounted() && (
                    <span className="ProductListItem__oldPrice">{StringUtils.toGBP(oldPrice)}</span>
                )}
            </h4>
            <ProductStock product={product} />
        </Card>
    );
};

export default ProductListItem;

import React, { ReactElement } from 'react';
import Product from '../../product/Product';
import Card from '../shared/card/Card';

import './ProductListItem.scss';

export interface ProductListItemProps {
    product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }): ReactElement => {
    const { name, price, thumbnail, promotionBadge } = product;
    const { current: currentPrice, old: oldPrice } = price;
    return (
        <Card className="ProductListItem" image={thumbnail} imageBadge={promotionBadge}>
            <h3 className="ProductListItem__name">{name}</h3>
            <h4 className="ProductListItem__price">
                <span className="ProductListItem__currentPrice">{currentPrice}</span>
                {price.isDiscounted() && <span className="ProductListItem__oldPrice">{oldPrice}</span>}
            </h4>
        </Card>
    );
}

export default ProductListItem;

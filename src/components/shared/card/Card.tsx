import React, { ReactElement } from 'react';

import './Card.scss';

export interface CardProps {
    image: string;
    imageBadge?: string;
    className: string;
}

const Card: React.FC<CardProps> = ({ image, imageBadge, className, children }): ReactElement => {
    return (
        <div className={`Card ${className}`}>
            <div className="Card__image" style={{ backgroundImage: `url(${image})` }}>
                {imageBadge && <span className="Card__imageBadge">{imageBadge}</span>}
            </div>
            <div className="Card__content">{children}</div>
        </div>
    );
}

export default Card;

import React, { ReactElement } from 'react';

import './Button.scss';

export type OnButtonClick = () => void;

export interface ButtonProps {
    name: string;
    onClick: OnButtonClick;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }): ReactElement => {
    return (
        <button className="Button" type="button" onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;

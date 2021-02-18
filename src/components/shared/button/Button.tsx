import React, { ReactElement } from 'react';

export type OnButtonClick = () => void;

export interface ButtonProps {
    name: string;
    onClick: OnButtonClick;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }): ReactElement => {
    return (
        <button type="button" className="Button" onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;

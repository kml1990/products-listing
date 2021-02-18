import React, { ReactElement, useCallback, useState } from 'react';

import './Selector.scss';

export type OnChecked = (checked: boolean) => void;
export interface SelectorProps {
    id: string;
    onSelected: OnChecked;
    className?: string;
}

const Selector: React.FC<SelectorProps> = ({ id, onSelected, className = '' }): ReactElement => {
    const [checked, setChecked] = useState<boolean>(false);

    const onChange = useCallback(() => {
        onSelected(!checked);
        setChecked(!checked);
    }, [checked]);

    return (
        <label className={`Selector ${className}`} htmlFor={id}>
            <input className="Selector__input" id={id} type="checkbox" checked={checked} onChange={onChange} />
            <span className="Selector__checkmark" />
        </label>
    );
}

export default Selector;

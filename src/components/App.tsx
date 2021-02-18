import React, { ReactElement } from 'react';
import Inventory from './inventory/Inventory';
import { ProductsProvider } from './product/ProductContext';

import './App.scss';

const App: React.FC = (): ReactElement => {
    return (
        <ProductsProvider>
            <Inventory />
        </ProductsProvider>
    );
};

export default App;

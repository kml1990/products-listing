import React, { ReactElement, useEffect } from 'react';
import AppConfig from '../config/AppConfig';
import useInjection from '../di/DependencyHook';
import DependencyType from '../di/DependencyType';

import './App.scss';
import Inventory from './inventory/Inventory';

const App: React.FC = (): ReactElement => {
    const appConfig = useInjection<AppConfig>(DependencyType.AppConfig);

    useEffect(() => {
        appConfig.configure();
    }, []);

    return (
        <div className="App">
            <Inventory />
        </div>
    );
};

export default App;

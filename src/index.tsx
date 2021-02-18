import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import App from './components/App';
import dependenciesContainer from './di/Dependencies';
import { DependencyProvider } from './di/DependencyContext';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <DependencyProvider container={dependenciesContainer}>
            <App />
        </DependencyProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

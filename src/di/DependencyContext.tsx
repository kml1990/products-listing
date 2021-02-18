import React, { createContext } from 'react';
import { Container } from 'inversify';

export const DependencyContext = createContext<Container | null>(null);

export interface DependencyProps {
    container: Container;
}

export const DependencyProvider: React.FC<DependencyProps> = ({ children, container }) => {
    return <DependencyContext.Provider value={container}>{children}</DependencyContext.Provider>;
};

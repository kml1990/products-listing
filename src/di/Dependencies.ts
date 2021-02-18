import { Container } from 'inversify';
import ProductService from '../product/ProductService';
import MockyProductProvider from '../provider/mocky/MockyProductProvider';
import DependencyType from './DependencyType';

const dependenciesContainer = new Container();

dependenciesContainer
    .bind<ProductService>(DependencyType.ProductService)
    .toDynamicValue(() => {
        return new ProductService(new MockyProductProvider());
    })
    .inSingletonScope();

export default dependenciesContainer;

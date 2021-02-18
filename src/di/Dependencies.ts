import { Container } from 'inversify';
import AppConfig from '../config/AppConfig';
import ProductService from '../product/ProductService';
import MockyProductProvider from '../provider/mocky/MockyProductProvider';
import DependencyType from './DependencyType';

const dependenciesContainer = new Container();

dependenciesContainer.bind<AppConfig>(DependencyType.AppConfig).to(AppConfig);

dependenciesContainer
    .bind<ProductService>(DependencyType.ProductService)
    .toDynamicValue(() => {
        return new ProductService(new MockyProductProvider());
    })
    .inSingletonScope();

export default dependenciesContainer;

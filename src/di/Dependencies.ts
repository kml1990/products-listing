import { Container } from 'inversify';
import AppConfig from '../config/AppConfig';
import DependencyType from './DependencyType';

const dependenciesContainer = new Container();

dependenciesContainer.bind<AppConfig>(DependencyType.AppConfig).to(AppConfig);

export default dependenciesContainer;

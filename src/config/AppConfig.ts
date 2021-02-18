import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';

@injectable()
export default class AppConfig {
    configure() {
        this.configureAxiosInterceptor();
    }

    private configureAxiosInterceptor() {
        axios.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                config.headers = {
                    'x-rapidapi-key': process.env.REACT_APP_WEATHERBIT_KEY,
                    'x-rapidapi-host': process.env.REACT_APP_WEATHERBIT_HOST,
                };
                return config;
            },
            (error: Error) => {
                return Promise.reject(error);
            },
        );
    }
}

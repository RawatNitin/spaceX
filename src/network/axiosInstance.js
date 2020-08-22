import axios from 'axios';
import config from '../config/config';

class networkManager {
    instance;
    constructor() {
        this.instance = axios.create({
            baseURL: config.baseURL,
            timeout: 100000
        });
    }

    get = (url, config) => {
        return this.instance.get(url, config);
    };

}

const axiosInstance = new networkManager();
export default axiosInstance;

export const getData = (url, params) => {
    const config = {
        params: params
    }
    return axiosInstance.get(url, config);
}

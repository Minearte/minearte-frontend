import * as config from '../config/config'
import Axios from 'axios'
import { packages } from './interfaces/package';

const packages:packages[] = [];

const axios = Axios.create({
    baseURL: getURL(),
    timeout: 1000,
    headers: {'X-From-Vue': 'true'}
})

export function getPackages(){
    const response = axios.get("/v1/store/packages");
    return response
}

export function getURL(){
    return config.backend.url + ":" + config.backend.port;
}

export default this;
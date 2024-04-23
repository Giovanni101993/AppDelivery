import axios from "axios"
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

const ApiDelivery = axios.create({
    //baseURL: 'http://185.27.134.135:3306/api',
    baseURL: 'http://192.168.20.25:3000/api',

    headers: {
        'Content-type': 'application/json'
    }
});

const ApiDeliveryForImage = axios.create({
    baseURL: 'http://192.168.20.25:3000/api',
    //baseURL: 'http://185.27.134.135:3306/api',

    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
});

//INTERCEPTORS
ApiDelivery.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');

        if (data){
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!;
        }
        return config;
    }
);

ApiDeliveryForImage.interceptors.request.use(
    async(config) => {
        const data = await LocalStorage().getItem('user');

        if (data){
            const user: User = JSON.parse(data as any);
            config.headers!['Authorization'] = user?.session_token!;
        }
        return config;
    }
);

export {ApiDelivery, ApiDeliveryForImage}           
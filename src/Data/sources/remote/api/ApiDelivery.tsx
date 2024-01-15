import axios from "axios"

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.20.25:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
});

export {ApiDelivery}
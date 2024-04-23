import axios from "axios";

const ApiMercadoPago = axios.create({
    baseURL: 'https://api.mercadopago.com/v1',
    headers:{
        "Content-Type": 'aplication/json',
        'Authorization': 'Bearer TEST-7299991881943845-042021-bbdf084b847c36b190cbf5a02c7223dc-357970647'
    }
}) 

export { ApiMercadoPago }
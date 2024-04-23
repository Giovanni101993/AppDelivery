import { AxiosError } from "axios";
import { Order } from "../../Domain/entities/Order";
import { StripeRepository } from "../../Domain/repositories/StripeRepository";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

export class StripeRepositoryImpl implements StripeRepository{
    async createPayment(id: string, amount: number, order: Order): Promise<ResponseAPIDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseAPIDelivery>('/stripe/create', {
                id: id,
                amount: amount,
                order: order
            });
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
            
        }
    }
}
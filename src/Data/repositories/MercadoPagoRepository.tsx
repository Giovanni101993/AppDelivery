import { AxiosError } from 'axios';
import { IdentificationType } from '../../Domain/entities/IdentificationType';
import { MercadoPagoRepository } from '../../Domain/repositories/MercadoPagoRepository';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ApiMercadoPago } from '../sources/remote/api/ApiMercadoPago';
import { CardTokenParams } from '../sources/remote/models/CardTokenParams';
import { PaymentParams } from '../sources/remote/models/PaymentParams';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { ResponseMercadoPagoCardToken } from '../sources/remote/models/ResponseMercadoPagoCardToken';
import { ResponseMercadoPagoInstallments } from '../sources/remote/models/ResponseMercadoPagoInstallments';

export class MercadoPagoRepositoryImpl implements MercadoPagoRepository{

    async createPayment(paymentParams: PaymentParams): Promise<ResponseAPIDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseAPIDelivery>('/payments/create', paymentParams);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }
    async getInstallments(bin: string, amount: number): Promise<ResponseMercadoPagoInstallments> {
        const response = await ApiMercadoPago.get<ResponseMercadoPagoInstallments[]>(`/payment_methods/installments?bin=${bin}&amount=${amount}`);
        return response.data[0];
    }

    async getIdentificationTypes(): Promise<IdentificationType[]> {
        const response = await ApiMercadoPago.get<IdentificationType[]>('/identification_types');
        return response.data;
    }

    async createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardToken> {
        const response = await  ApiMercadoPago.post<ResponseMercadoPagoCardToken>('/card_tokens?public_key=TEST-68854c66-b556-42fa-a9d8-599604c3d4f8', cardTokenParams);
        return response.data;
    }
}
import { IdentificationType } from "../entities/IdentificationType";
import { CardTokenParams } from '../../Data/sources/remote/models/CardTokenParams';
import { ResponseMercadoPagoCardToken } from "../../Data/sources/remote/models/ResponseMercadoPagoCardToken";
import { ResponseMercadoPagoInstallments } from "../../Data/sources/remote/models/ResponseMercadoPagoInstallments";
import { PaymentParams } from '../../Data/sources/remote/models/PaymentParams';
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";

export interface MercadoPagoRepository{
    getIdentificationTypes(): Promise<IdentificationType[]>;
    getInstallments(bin: string, amount: number): Promise<ResponseMercadoPagoInstallments>;
    createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardToken>;
    createPayment(paymentParams: PaymentParams): Promise<ResponseAPIDelivery>;
}
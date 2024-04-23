import { MercadoPagoRepositoryImpl } from "../../../Data/repositories/MercadoPagoRepository";
import { PaymentParams } from "../../../Data/sources/remote/models/PaymentParams";

const {createPayment} = new MercadoPagoRepositoryImpl(); 

export const CreatePaymentMercadoPagoUseCase = async (paymentParams: PaymentParams) => {
    return await createPayment(paymentParams);
}
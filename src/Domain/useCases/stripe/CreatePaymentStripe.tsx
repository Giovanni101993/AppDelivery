import { StripeRepositoryImpl } from "../../../Data/repositories/StripeRepository";
import { Order } from "../../entities/Order";

const {createPayment} = new StripeRepositoryImpl();

export const CreatePaymentStripeUseCase = async (id: string, amount: number, order: Order) =>{
    return await createPayment(id, amount, order);
}
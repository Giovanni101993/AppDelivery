import { PaymentRepositoryImpl } from "../../../Data/repositories/PaymentRepository";

const {getAll} = new PaymentRepositoryImpl();

export const GetAllPaymentUseCase =  async () => {
  return await getAll();
}

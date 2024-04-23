import { MercadoPagoRepositoryImpl } from "../../../Data/repositories/MercadoPagoRepository";

const {getIdentificationTypes} = new MercadoPagoRepositoryImpl();


export const GetIdentificationTypesMercadoPagoUseCase = async () => {
  return await getIdentificationTypes();
}

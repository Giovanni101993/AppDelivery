import { MercadoPagoRepositoryImpl } from "../../../Data/repositories/MercadoPagoRepository";
import { CardTokenParams } from '../../../Data/sources/remote/models/CardTokenParams';

const {createCardToken} = new MercadoPagoRepositoryImpl(); 

export const CreateCardTokenMercadoPagoUseCase = async (cardTokenParams: CardTokenParams) => {
    return await createCardToken(cardTokenParams);
}
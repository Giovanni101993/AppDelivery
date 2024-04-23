import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";

const {getByClientAndStatus} = new OrderRepositoryImpl();

export const GetByClientAndStatusOrderUseCase = async (idClient: string, status: string) => {
    return await getByClientAndStatus(idClient, status);
}
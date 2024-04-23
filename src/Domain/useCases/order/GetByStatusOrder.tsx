import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";

const {getByStatus} = new OrderRepositoryImpl();

export const GetByStatusOrderUseCase = async (status: string) => {
    return await getByStatus(status);
}
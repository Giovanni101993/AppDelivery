import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";
import { Order } from '../../entities/Order';

const {create} = new OrderRepositoryImpl();

export const CreateOrderUseCase = async (order:Order) => {
    return await create(order);
}
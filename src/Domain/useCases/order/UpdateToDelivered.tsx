import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";
import { Order } from '../../entities/Order';

const {updateToDelivered} = new OrderRepositoryImpl();

export const UpdateToDeliveredOrderUseCase = async (order:Order) => {
    return await updateToDelivered(order);
}
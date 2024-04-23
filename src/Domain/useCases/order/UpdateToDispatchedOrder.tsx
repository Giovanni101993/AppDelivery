import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";
import { Order } from '../../entities/Order';

const {updateToDispatched} = new OrderRepositoryImpl();

export const UpdateToDispatchedOrderUseCase = async (order:Order) => {
    return await updateToDispatched(order);
}
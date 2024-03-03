import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";
import { Order } from '../../entities/Order';

const {updateToOnTheWay} = new OrderRepositoryImpl();

export const UpdateToOnTheWayOrderUseCase = async (order:Order) => {
    return await updateToOnTheWay(order);
}
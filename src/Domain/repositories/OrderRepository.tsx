import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Order } from "../entities/Order";

export interface OrderRepository{
    create (order: Order): Promise<ResponseAPIDelivery>;
    getByStatus(status: string): Promise<Order[]>;
    getByDeliveryAndStatus(idDelivery: string, status: string): Promise<Order[]>;
    getByClientAndStatus(idClient: string, status: string): Promise<Order[]>;
    updateToDispatched(order: Order): Promise<ResponseAPIDelivery>;
    updateToOnTheWay(order: Order): Promise<ResponseAPIDelivery>;
    updateToDelivered(order: Order): Promise<ResponseAPIDelivery>;
}
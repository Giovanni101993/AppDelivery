import { createContext, useEffect, useState } from "react";
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Order } from "../../Domain/entities/Order";
import { GetByStatusOrderUseCase } from "../../Domain/useCases/order/GetByStatusOrder";
import { UpdateToDispatchedOrderUseCase } from "../../Domain/useCases/order/UpdateToDispatchedOrder";
import { GetByDeliveryAndStatusOrderUseCase } from "../../Domain/useCases/order/GetByDeliveryAndStatusOrder";
import { UpdateToOnTheWayOrderUseCase } from "../../Domain/useCases/order/UpdateToOnTheWayOrder";
import { UpdateToDeliveredOrderUseCase } from "../../Domain/useCases/order/UpdateToDelivered";
import { GetByClientAndStatusOrderUseCase } from "../../Domain/useCases/order/GetByClientAndStatusOrder";

export interface OrderContextProps{
    ordersPayed: Order[],
    ordersDispatched: Order[],
    ordersOnTheWay: Order[],
    ordersDelivery: Order[],
    getOrdersByStatus(status: string): Promise<void>,
    getOrdersByDeliveryAndStatus(idDelivery: string, status: string): Promise<void>,
    getOrdersByClientAndStatus(idClient: string, status: string): Promise<void>,
    updateToDispatched(order: Order): Promise<ResponseAPIDelivery>,
    updateToOnTheWay(order: Order): Promise<ResponseAPIDelivery>,
    updateToDelivered(order: Order): Promise<ResponseAPIDelivery>,
}

export const OrderContext = createContext({} as OrderContextProps);
export const OrderProvider = ({children}: any) => {
    const [ordersPayed, setOrdersPayed] = useState<Order[]>([]);
    const [ordersDispatched, setOrdersDispatched] = useState<Order[]>([]);
    const [ordersOnTheWay, setOrdersOnTheWay] = useState<Order[]>([]);
    const [ordersDelivery, setOrdersDelivery] = useState<Order[]>([]);

    useEffect(() => {
      setOrdersPayed([]);
      setOrdersDispatched([]);
      setOrdersOnTheWay([]);
      setOrdersDelivery([]);
    }, [])
    
    const getOrdersByStatus = async (status: string) => {
        const result = await GetByStatusOrderUseCase(status);
        if(status === 'PAGADO'){
            setOrdersPayed(result);
        }
        else if(status === 'DESPACHADO'){
            setOrdersDispatched(result);
        }
        else if(status === 'EN CAMINO'){
            setOrdersOnTheWay(result);
        }
        else if(status === 'ENTREGADO'){
            setOrdersDelivery(result);
        }
    }

    const getOrdersByDeliveryAndStatus = async (idDelivery: string, status: string) => {
        const result = await GetByDeliveryAndStatusOrderUseCase(idDelivery, status);
        if(status === 'PAGADO'){
            setOrdersPayed(result);
        }
        else if(status === 'DESPACHADO'){
            setOrdersDispatched(result);
        }
        else if(status === 'EN CAMINO'){
            setOrdersOnTheWay(result);
        }
        else if(status === 'ENTREGADO'){
            setOrdersDelivery(result);
        }
    }

    const getOrdersByClientAndStatus = async (idClient: string, status: string) => {
        const result = await GetByClientAndStatusOrderUseCase(idClient, status);
        if(status === 'PAGADO'){
            setOrdersPayed(result);
        }
        else if(status === 'DESPACHADO'){
            setOrdersDispatched(result);
        }
        else if(status === 'EN CAMINO'){
            setOrdersOnTheWay(result);
        }
        else if(status === 'ENTREGADO'){
            setOrdersDelivery(result);
        }
    }

    const updateToDispatched = async(order: Order) => {
        const result = await UpdateToDispatchedOrderUseCase(order);
        getOrdersByStatus('PAGADO');
        getOrdersByStatus('DESPACHADO');
        return result;
    }
    const updateToOnTheWay = async(order: Order) => {
        const result = await UpdateToOnTheWayOrderUseCase(order);
        getOrdersByDeliveryAndStatus(order.id_delivery!,'DESPACHADO');
        getOrdersByDeliveryAndStatus(order.id_delivery!, 'EN CAMINO');
        return result;
    }

    const updateToDelivered = async(order: Order) => {
        const result = await UpdateToDeliveredOrderUseCase(order);
        getOrdersByDeliveryAndStatus(order.id_delivery!, 'EN CAMINO');
        getOrdersByDeliveryAndStatus(order.id_delivery!,'ENTREGADO');
        return result;
    }

    return(
        <OrderContext.Provider
            value={{
                ordersPayed,
                ordersDispatched,
                ordersOnTheWay,
                ordersDelivery,
                getOrdersByStatus,
                getOrdersByDeliveryAndStatus,
                getOrdersByClientAndStatus,
                updateToDispatched,
                updateToOnTheWay,
                updateToDelivered
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
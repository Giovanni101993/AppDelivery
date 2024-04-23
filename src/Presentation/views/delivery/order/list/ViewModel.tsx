import React, { useState, useContext, useEffect } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/order/GetByStatusOrder';
import { Order } from '../../../../../Domain/entities/Order';
import { OrderContext } from '../../../../context/OrderContext';
import { UserContext } from '../../../../context/UserContext';

const DeliveryOrderListViewModel = () => {

    //const [orders, setOrders] = useState<Order[]>([]);

    const {ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, getOrdersByDeliveryAndStatus} = useContext(OrderContext);
    const {user} = useContext(UserContext);

    const getOrders = async (idDelivery: string, status: string) => {
        const result = await getOrdersByDeliveryAndStatus(idDelivery, status);
    }
  return {
    ordersPayed,
    ordersDispatched,
    ordersOnTheWay,
    ordersDelivery,
    user,
    getOrders,
  }
}

export default DeliveryOrderListViewModel;
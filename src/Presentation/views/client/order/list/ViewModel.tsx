import React, { useState, useContext, useEffect } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/order/GetByStatusOrder';
import { Order } from '../../../../../Domain/entities/Order';
import { OrderContext } from '../../../../context/OrderContext';
import { UserContext } from '../../../../context/UserContext';

const ClientOrderListViewModel = () => {

    //const [orders, setOrders] = useState<Order[]>([]);

    const {ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, getOrdersByClientAndStatus} = useContext(OrderContext);
    const {user} = useContext(UserContext);

    const getOrders = async (idClient: string, status: string) => {
        const result = await getOrdersByClientAndStatus(idClient, status);
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

export default ClientOrderListViewModel;
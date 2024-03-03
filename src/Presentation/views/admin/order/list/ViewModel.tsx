import React, { useState, useContext } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/order/GetByStatusOrder';
import { Order } from '../../../../../Domain/entities/Order';
import { OrderContext } from '../../../../context/OrderContext';

const AdminOrderListViewModel = () => {

    //const [orders, setOrders] = useState<Order[]>([]);

    const {ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, getOrdersByStatus} = useContext(OrderContext);

    const getOrders = async (status: string) => {
        const result = await getOrdersByStatus(status);
    }
  return {
    ordersPayed,
    ordersDispatched,
    ordersOnTheWay,
    ordersDelivery,
    getOrders
  }
}

export default AdminOrderListViewModel;
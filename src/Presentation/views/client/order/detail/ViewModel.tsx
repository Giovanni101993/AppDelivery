import React, { useEffect, useState, useContext } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { User } from '../../../../../Domain/entities/User';
import { OrderContext } from '../../../../context/OrderContext';

interface DropDownProps{
    label: string,
    value: string
}

export const ClientOrderDetailViewModel = (order: Order) => {
  
    const [total, setTotal] = useState(0);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
    const [responseMessagge, setResponseMessagge] = useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const {updateToOnTheWay} = useContext(OrderContext)
    
    const updateToOnTheWayOrder = async () => {
            const result = await updateToOnTheWay(order);
            setResponseMessagge(result.message);
    }

  const getTotal = () => {
        order.products.forEach(p =>{
            setTotal(total + (p.price * p.quantity!));
        });
  }

    return {
        total,
        deliveryMen,
        open,
        value,
        items,
        responseMessagge,
        getTotal,
        setOpen,
        setValue,
        setItems,
        updateToOnTheWayOrder
    }
}

export default ClientOrderDetailViewModel;
import React, { useEffect, useState, useContext } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';
import { UpdateToDispatchedOrderUseCase } from '../../../../../Domain/useCases/order/UpdateToDispatchedOrder';
import { OrderContext } from '../../../../context/OrderContext';

interface DropDownProps{
    label: string,
    value: string
}

export const AdminOrderDetailViewModel = (order: Order) => {
  
    const [total, setTotal] = useState(0);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
    const [responseMessagge, setResponseMessagge] = useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const {updateToDispatched} = useContext(OrderContext)

    useEffect(() => {
      setDropDownItems();
    }, [deliveryMen])
    
    const dispatchOrder = async () => {
        if(value !== null){
            order.id_delivery = value!;
            const result = await updateToDispatched(order);
            setResponseMessagge(result.message);
        }
        else{
            setResponseMessagge('Selecciona el repartidor');
        }
    }

    const setDropDownItems = () =>{
        let itemsDeliveryMen: DropDownProps[] = [];
        deliveryMen.forEach(delivery => {
            itemsDeliveryMen.push({
                
                label: delivery.name + ' ' + delivery.lastname,
                value: delivery.id! 
            })
        });
        setItems(itemsDeliveryMen);
    }
    
    const getDeliveryMen = async () => {
        const result = await GetDeliveryMenUserUseCase();
        console.log('REPARTIDORES: ' +JSON.stringify(result, null, 3));
        setDeliveryMen(result);
    }

    const getTotal = () => {
        let total = 0;
        order.products.forEach(p => {
            if (p.quantity) {
                total += p.price * p.quantity;
            }
        });
        setTotal(total);
    }

    return {
        total,
        deliveryMen,
        open,
        value,
        items,
        responseMessagge,
        getTotal,
        getDeliveryMen,
        setOpen,
        setValue,
        setItems,
        dispatchOrder
    }
}

export default AdminOrderDetailViewModel;
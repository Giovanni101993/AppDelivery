import React, { useEffect, useState, useContext } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';
import { UpdateToDispatchedOrderUseCase } from '../../../../../Domain/useCases/order/UpdateToDispatchedOrder';
import { OrderContext } from '../../../../context/OrderContext';
import { NotificationPush } from '../../../../utils/NotificationPush';

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
    const {updateToDispatched} = useContext(OrderContext);
    const {sendPushNotification} = NotificationPush();

    useEffect(() => {
      setDropDownItems();
    }, [deliveryMen])
    
    const dispatchOrder = async () => {
        if(value !== null){
            order.id_delivery = value!;
            const result = await updateToDispatched(order);
            setResponseMessagge(result.message);
            if (result.success) {
                const index = deliveryMen.findIndex((delivery) => delivery.id === value!);
                console.log('TOKEN DE NOTIFICACIÓN: '+ deliveryMen[index].notification_token);
                
                await sendPushNotification(deliveryMen[index].notification_token!, 'PEDIDO ASIGNADO','TE HAN ASIGNADO UN PEDIDO');    
            }
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
    
    const getDeliveryMen = async (id_store: string) => {
        const result = await GetDeliveryMenUserUseCase(id_store);
        console.log('REPARTIDORES: ' +JSON.stringify(result, null, 3));
        setDeliveryMen(result);
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
        getDeliveryMen,
        setOpen,
        setValue,
        setItems,
        dispatchOrder
    }
}

export default AdminOrderDetailViewModel;
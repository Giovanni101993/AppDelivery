import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/UserContext';
import { GetByUserAddressUseCase } from '../../../../../Domain/useCases/address/GetByUserAddress';
import { Address } from '../../../../../Domain/entities/Address';
import { CreateOrderUseCase } from '../../../../../Domain/useCases/order/CreateOrder';
import { Order } from '../../../../../Domain/entities/Order';
import { ShoppingBagContext } from '../../../../context/ShoppingBagContext';

export const ClientAddressListViewModel = () => {
  
    const [address, setAddress] = useState<Address[]>([]);
    const {user, saveUserSession, getUserSession} = useContext(UserContext);
    const {shoppingBag} = useContext(ShoppingBagContext)
    const [checked, setChecked] = useState('');
    const [responseMessagge, setResponseMessagge] = useState('');


    useEffect(() => {
        getAddress();
        if(user.address !== null && user.address !== undefined){
            changeRadioValue(user.address!)
        }
    }, [user])

    const createOrder = async () =>{
        const order: Order = {
            id_client: user.id!,
            id_address: user.address?.id!,
            products: shoppingBag
        }
        const result = await CreateOrderUseCase(order);
        setResponseMessagge(result.message);
    }
    
    const changeRadioValue = (address: Address) => {
        setChecked(address.id!);
        user.address = address;
        saveUserSession(user);
    }

    const getAddress = async () => {
        const result = await GetByUserAddressUseCase(user.id!);
        setAddress(result);
    }
  
    return{
        address,
        checked,
        responseMessagge,
        getAddress,
        changeRadioValue,
        createOrder
    }
}

export default ClientAddressListViewModel;

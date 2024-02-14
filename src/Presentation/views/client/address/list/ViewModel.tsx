import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/UserContext';
import { GetByUserAddressUseCase } from '../../../../../Domain/useCases/address/GetByUserAddress';
import { Address } from '../../../../../Domain/entities/Address';

export const ClientAddressListViewModel = () => {
  
    const [address, setAddress] = useState<Address[]>([]);
    const {user, saveUserSession, getUserSession} = useContext(UserContext);
    const [checked, setChecked] = useState('');

    useEffect(() => {
        getAddress();
        if(user.address !== null && user.address !== undefined){
            changeRadioValue(user.address!)
        }
    }, [user])
    
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
        getAddress,
        changeRadioValue
    }
}

export default ClientAddressListViewModel;

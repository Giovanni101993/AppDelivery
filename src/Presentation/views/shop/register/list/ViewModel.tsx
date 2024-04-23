import React, { useContext, useState } from 'react'
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';
import { Category } from '../../../../../Domain/entities/Category';
import { GetAllStoreUseCase } from '../../../../../Domain/useCases/user/GetAllStore';
import { User } from '../../../../../Domain/entities/User';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { UserContext } from '../../../../context/UserContext';

const AdminDeliveryListViewModel = () => {
  
    const [users, setUsers] = useState<User[]>([]);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
    const {user} =useContext(UserContext);


    const getDeliveryMen = async (id_store: string) => {
        const result = await GetDeliveryMenUserUseCase(id_store);
        console.log('REPARTIDORES: ' +JSON.stringify(result, null, 3));
        setDeliveryMen(result);
    }

    return {
        users,
        user,
        deliveryMen,
        getDeliveryMen
    }
}

export default AdminDeliveryListViewModel;

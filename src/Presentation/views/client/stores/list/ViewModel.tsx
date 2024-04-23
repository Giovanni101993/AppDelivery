import React, { useState } from 'react'
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';
import { Category } from '../../../../../Domain/entities/Category';
import { GetAllStoreUseCase } from '../../../../../Domain/useCases/user/GetAllStore';
import { User } from '../../../../../Domain/entities/User';

const ClientStoreListViewModel = () => {
  
    const [users, setUsers] = useState<User[]>([]);

    const getAllStore = async () => {
        const result = await GetAllStoreUseCase();
        setUsers(result);
    }

    return {
        users,
        getAllStore
    }
}

export default ClientStoreListViewModel;

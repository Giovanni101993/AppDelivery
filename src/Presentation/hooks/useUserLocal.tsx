import React, {useEffect, useState} from 'react';
import { GetUserUseCase } from '../../Domain/useCases/userLocal/GetUser';
import { User } from '../../Domain/entities/User';

export const useUserLocal = () => {
    
    const [user, setUser] = useState<User>()

    useEffect(() => {
        getUserSession();
    }, [])
    
    const getUserSession = async() => {
        const user = await GetUserUseCase();
        setUser(user);
    }

    return {user};
}

import React, {createContext, useEffect, useState} from "react";
import { User } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";
import { Rol } from '../../Domain/entities/Rol';
import { GetAllStoreUseCase } from "../../Domain/useCases/user/GetAllStore";
import { GetDeliveryMenUserUseCase } from "../../Domain/useCases/user/GetDeliveryMenUser";

export const userInitialState: User = {

    id:              '',
    name:            '',
    lastname:        '',
    name_store:      '',
    business_type:   '',
    addres:          '',
    id_store:        '',
    departamento:    '',
    ciudad:          '',
    email:           '',
    phone:           '',
    password:        '',
    confirmPassword: '',
    image:           '',
    session_token:   '',
    roles:           [],
}

export interface UserContextProps {

    user: User,
    saveUserSession: (user: User) => Promise<void>;
    getUserSession: () => Promise<void>;
    getAllStore: () => Promise<void>;
    getDeliveryMen: (id_store: string) => Promise<void>;
    removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({children}: any) =>{

    const [user, setUser] = useState(userInitialState);
    const [store, setStores] = useState<User[]>([]);
    useEffect(() => {
        if(store.length === 0){
            getAllStore()
        }
      }, [])


    useEffect(() => {
      getUserSession();
    }, [])
    

    const saveUserSession = async (user: User) =>{
        await SaveUserLocalUseCase(user);
        setUser(user);
    }

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }

    const getAllStore = async () => {
        const result = await GetAllStoreUseCase();
        setStores(result);
    }

    const getDeliveryMen = async (id_store: string) => {
        const result = await GetDeliveryMenUserUseCase(id_store);
        setStores(result);
    }

    const removeUserSession = async () => {
        await RemoveUserLocalUseCase();
        setUser(userInitialState);
    }

    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            getDeliveryMen,
            removeUserSession, 
            getAllStore
        }}>
            {children}
        </UserContext.Provider>
    )
}
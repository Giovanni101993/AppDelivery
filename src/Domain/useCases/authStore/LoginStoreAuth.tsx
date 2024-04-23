import { AuthStoreRepositoryImpl } from "../../../Data/repositories/AuthStoreRepository";

const {loginStore} = new AuthStoreRepositoryImpl();

export const LoginStoreAuthUseCase = async (email: string, password: string) =>{
    return await loginStore(email, password);
}
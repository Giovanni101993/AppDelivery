import { AuthStoreRepositoryImpl } from "../../../Data/repositories/AuthStoreRepository";
import { User } from "../../entities/User";

const {registerStore} = new AuthStoreRepositoryImpl();

export const RegisterStoreAuthUseCase = async (user: User) => {

    return await registerStore(user);
}
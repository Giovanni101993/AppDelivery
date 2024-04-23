import { UserStoreRepositoryImpl } from "../../../Data/repositories/UserStoreRepository";
import { User } from "../../entities/User";

const {updateStore} = new UserStoreRepositoryImpl();

export const UpdateStoreUserUseCase =async (user:User) => {
    return await updateStore(user);
}
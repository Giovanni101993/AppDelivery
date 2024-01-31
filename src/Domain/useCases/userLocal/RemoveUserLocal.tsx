import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const {remove} = new UserLocalRepositoryImpl();

export const RemoveUserLocalUseCase = async () => {
    return await remove();
}
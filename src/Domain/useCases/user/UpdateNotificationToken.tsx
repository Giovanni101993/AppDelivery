import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";

const {updateNotificationToken} = new UserRepositoryImpl();

export const UpdateNotificationTokenUseCase =async (id: string, token: string) => {
    return await updateNotificationToken(id, token);
}
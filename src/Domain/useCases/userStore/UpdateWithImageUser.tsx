import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { UserStoreRepositoryImpl } from "../../../Data/repositories/UserStoreRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';

const {updateStoreWithImage} = new UserStoreRepositoryImpl();

export const UpdateStoreWithImageUserUseCase =async (user:User, file: ImagePicker.ImagePickerAsset) => {
    return await updateStoreWithImage(user, file);
}
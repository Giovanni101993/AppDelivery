import { AuthStoreRepositoryImpl } from "../../../Data/repositories/AuthStoreRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';

const {registerStoreWithImage} = new AuthStoreRepositoryImpl();

export const RegisterStoreWithImageAuthUseCase = async (user: User, file:ImagePicker.ImagePickerAsset) => {

    return await registerStoreWithImage(user, file);
}
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface AuthStoreRepository{

    loginStore(email: string, password: string): Promise<ResponseAPIDelivery>;
    registerStore(user: User): Promise<ResponseAPIDelivery>
    registerStoreWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>,
}
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface UserStoreRepository{

    updateStore(user: User): Promise<ResponseAPIDelivery>;
    updateStoreWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>;
    //getDeliveryMen(): Promise<User[]>;
    getAllStore(): Promise<User[]>;
}
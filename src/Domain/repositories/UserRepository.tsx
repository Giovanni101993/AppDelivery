import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface UserRepository{

    update(user: User): Promise<ResponseAPIDelivery>;
    updateWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>;
}
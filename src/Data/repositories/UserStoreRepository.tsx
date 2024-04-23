import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryForImage } from "../sources/remote/api/ApiDelivery";
import mime from "mime";
import { UserStoreRepository } from "../../Domain/repositories/UserStoreRepository";

export class UserStoreRepositoryImpl implements UserStoreRepository{

    /*async getDeliveryMen(id_store: string): Promise<User[]> {
        try {
          const response = await ApiDelivery.get<User[]>(`/store/findDeliveryMen/${id_store}`);
          return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            return Promise.resolve([]);
        }
    }*/

    async updateStore(user: User): Promise<ResponseAPIDelivery> {                
        try{
            const response = await ApiDelivery.put<ResponseAPIDelivery>('/store/updateWithoutImage', user);
            return Promise.resolve(response.data);

        }catch (error){
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }

    async updateStoreWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try{
          
            let data = new FormData();
            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            }as any);
            
            data.append('user', JSON.stringify(user));
            const response = await ApiDeliveryForImage.put<ResponseAPIDelivery>('/store/update', data);
            return Promise.resolve(response.data);

        }catch (error){
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
            
        }
    }

    async getAllStore(): Promise<User[]> {
        try {
            const response = await ApiDelivery.get<User[]>('/store/getAllStore');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }
}
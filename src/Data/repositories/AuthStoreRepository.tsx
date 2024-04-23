import { User } from '../../Domain/entities/User';
import { ApiDelivery, ApiDeliveryForImage } from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';
import mime from 'mime';
import * as ImagePicker from 'expo-image-picker';
import { AuthStoreRepository } from '../../Domain/repositories/AuthStoreRepository';

export class AuthStoreRepositoryImpl implements AuthStoreRepository{

    async registerStore(user: User): Promise<ResponseAPIDelivery>
    {
        try{
            const response = await ApiDelivery.post<ResponseAPIDelivery>('/store/create', user);
            return Promise.resolve(response.data);

        }catch (error){
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }

    async registerStoreWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try{
          
            let data = new FormData();
            data.append('image', {
                // @ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            }as any);
            
            data.append('user', JSON.stringify(user));
            const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>('/store/createWithImage', data);
            return Promise.resolve(response.data);

        }catch (error){
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
            
        }
    }

    async loginStore(email: string, password: string): Promise<ResponseAPIDelivery>
    {

        try{
            const response = await ApiDelivery.post<ResponseAPIDelivery>('/store/login', {
                email: email,
                password: password
            });
            
            return Promise.resolve(response.data);

        }catch (error){
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
            
        }
    }
}
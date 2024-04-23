import { ImagePickerAsset } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';
import mime from 'mime';
import { ApiDelivery, ApiDeliveryForImage } from '../sources/remote/api/ApiDelivery';
import { Payment } from '../../Domain/entities/Payment';
import { PaymentRepository } from '../../Domain/repositories/PaymentRepository';

export class PaymentRepositoryImpl implements PaymentRepository{

    async getAll(): Promise<Payment[]> {
        try {
            const response = await ApiDelivery.get<Payment[]>('/payment/getAll');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async getPaymentByUser(idUser: string): Promise<Payment[]> {
        try {
            const response = await ApiDelivery.get<Payment[]>(`/payment/getPaymentByUser/${idUser}`);  
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }
    async create(payment: Payment, file: ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();
                data.append('image', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                }as any);
            data.append('payment', JSON.stringify(payment));
            const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>('/payment/create', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError)
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async update(payment: Payment): Promise<ResponseAPIDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseAPIDelivery>('/payment/update', payment);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }

    async updateWithImage(payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();
            data.append('image', {
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            }as any);
            data.append('payment', JSON.stringify(payment));
            const response = await ApiDeliveryForImage.put<ResponseAPIDelivery>('/payment/updateWithImage', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }

    async remove(id: string): Promise<ResponseAPIDelivery> { 
        try {
            const response = await ApiDelivery.delete<ResponseAPIDelivery>(`/payment/delete/${id}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError); 
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }
}
import { ImagePickerAsset } from 'expo-image-picker';
import { Product } from '../../Domain/entities/Product';
import { ProductRepository } from '../../Domain/repositories/ProductRepository';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';
import mime from 'mime';
import { ApiDelivery, ApiDeliveryForImage } from '../sources/remote/api/ApiDelivery';

export class ProductRepositoryImpl implements ProductRepository{

    async getProductsByCategory(idCategory: string): Promise<Product[]> {
        try {
            const response = await ApiDelivery.get<Product[]>(`/products/findByStore/${idCategory}`);  
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async getProductsByUser(idUser: string, idCategory: string): Promise<Product[]> {
        try {
            const response = await ApiDelivery.get<Product[]>(`/products/findByCategoryAndUser/${idUser}/${idCategory}`);  
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async create(product: Product, files: ImagePickerAsset[]): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();
            files.forEach(file =>{
                data.append('image', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                }as any);
            });
            data.append('product', JSON.stringify(product));
            const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>('/products/create', data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError)
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async update(product: Product): Promise<ResponseAPIDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseAPIDelivery>('/products/update', product);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError)
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async updateWithImage(product: Product, files: ImagePickerAsset[]): Promise<ResponseAPIDelivery> {
        try {
            let data = new FormData();
            files.forEach(file =>{
                data.append('image', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                }as any);
            });
            data.append('product', JSON.stringify(product));
            const response = await ApiDeliveryForImage.put<ResponseAPIDelivery>('/products/updateWithImage', product);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError)
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(product: Product): Promise<ResponseAPIDelivery>{
        try {
            const response = await ApiDelivery.delete<ResponseAPIDelivery>(`/products/delete/${product.id}`);
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}
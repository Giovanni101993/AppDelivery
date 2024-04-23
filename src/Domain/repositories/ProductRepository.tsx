import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Product } from "../entities/Product";
import * as ImagePicker from 'expo-image-picker';

export interface ProductRepository {
    create (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    getProductsByCategory(idCategory: string): Promise<Product[]>;
    getProductsByUser(idUser: string, idCategory: string): Promise<Product[]>; 
    update(product: Product): Promise<ResponseAPIDelivery>;
    updateWithImage (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    remove(product: Product): Promise<ResponseAPIDelivery>;
}
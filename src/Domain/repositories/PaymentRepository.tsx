import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";

import * as ImagePicker from 'expo-image-picker';
import { Payment } from "../entities/Payment";

export interface PaymentRepository {
    getAll(): Promise<Payment[]>
    create (payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>;
    getPaymentByUser(idUser: string): Promise<Payment[]>;
    update(payment: Payment): Promise<ResponseAPIDelivery>;
    updateWithImage(payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>;
    remove(id: string): Promise<ResponseAPIDelivery>;
}
import { createContext, useEffect, useState } from "react";
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import * as ImagePicker from 'expo-image-picker';
import { Payment } from '../../Domain/entities/Payment';
import { GetPaymentByUserUseCase } from "../../Domain/useCases/payment/GetPaymentByUser";
import { CreatePaymentUseCase } from "../../Domain/useCases/payment/CreatePayment";
import { GetAllPaymentUseCase } from "../../Domain/useCases/payment/GetAllPayment";
import { UpdatePaymentUseCase } from "../../Domain/useCases/payment/UpdatePayment";
import { UpdateWithImagePaymentUseCase } from "../../Domain/useCases/payment/UpdateWithImagePayment";
import { DeletePaymentUseCase } from "../../Domain/useCases/payment/DeletePayment";

export interface PaymentContextProps{
    payment: Payment[],
    getPayment(): Promise<void>,
    create(payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>,
    getPaymentByUser(idUser: string): Promise<void>,
    update(payment: Payment): Promise<ResponseAPIDelivery>,
    updateWithImage(payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>,
    remove(id: string): Promise<ResponseAPIDelivery>
}
 
export const PaymentContext = createContext({} as PaymentContextProps);

export const PaymentProvider = ({children}: any) =>{

    const [payment, setPayment] = useState<Payment[]>([]);

    /*useEffect(() => {
        if(payment.length === 0){
            getPayment()
        }
      }, [])*/

    const getPayment = async(): Promise<void> =>{
        const result = await GetAllPaymentUseCase();
        setPayment(result);
    }

    const getPaymentByUser = async (idUser: string): Promise<void> => {
        const result = await GetPaymentByUserUseCase(idUser);
        setPayment(result); 
    }

    const create = async (payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> => {
        const response = await CreatePaymentUseCase(payment, file!);
        getPaymentByUser(payment.id!);
        return response;
    }

    const update = async (payment: Payment): Promise<ResponseAPIDelivery> => {
        const response = await UpdatePaymentUseCase(payment);
        getPaymentByUser(payment.id!);
        return response;
    }

    const updateWithImage = async (payment: Payment, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> => {
        const response = await UpdateWithImagePaymentUseCase(payment, file);
        getPaymentByUser(payment.id);
        return response;
    }

    const remove = async (id: string): Promise<ResponseAPIDelivery> => {
        const response = await DeletePaymentUseCase(id);
        getPaymentByUser(id!);
        return response;
    }

    return(
        <PaymentContext.Provider value={{
            payment,
            getPayment,
            getPaymentByUser,
            update,
            updateWithImage,
            remove,
            create,
        }}>
            {children}
        </PaymentContext.Provider>
    )
}


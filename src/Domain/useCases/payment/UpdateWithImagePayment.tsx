import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { PaymentRepositoryImpl } from '../../../Data/repositories/PaymentRepository';
import { Payment } from '../../entities/Payment';

const {updateWithImage} = new PaymentRepositoryImpl();

export const UpdateWithImagePaymentUseCase = async(payment: Payment, file: ImagePicker.ImagePickerAsset) => {
  
    return await updateWithImage(payment, file);
}

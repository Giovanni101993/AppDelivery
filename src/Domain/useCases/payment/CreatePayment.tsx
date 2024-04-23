import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { PaymentRepositoryImpl } from '../../../Data/repositories/PaymentRepository';
import { Payment } from '../../entities/Payment';

const {create} = new PaymentRepositoryImpl();

export const CreatePaymentUseCase = async (payment: Payment, file: ImagePicker.ImagePickerAsset) => {
  return await create(payment, file);
}

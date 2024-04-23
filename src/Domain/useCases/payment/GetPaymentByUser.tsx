import React from 'react'
import { PaymentRepositoryImpl } from '../../../Data/repositories/PaymentRepository';

const {getPaymentByUser} = new PaymentRepositoryImpl();

export const GetPaymentByUserUseCase = async(idUser: string) => {
  return await getPaymentByUser(idUser);
}

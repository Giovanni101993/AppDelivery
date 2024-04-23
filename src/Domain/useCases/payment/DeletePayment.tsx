import React from 'react'
import { PaymentRepositoryImpl } from '../../../Data/repositories/PaymentRepository';

const {remove} = new PaymentRepositoryImpl();

export const DeletePaymentUseCase = async(id: string) => {
  
    return await remove(id);
}

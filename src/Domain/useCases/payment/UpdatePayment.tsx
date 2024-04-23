import React from 'react'
import { PaymentRepositoryImpl } from '../../../Data/repositories/PaymentRepository';
import { Payment } from '../../entities/Payment';

const {update} = new PaymentRepositoryImpl();

export const UpdatePaymentUseCase = async(payment: Payment) => {
  
    return await update(payment);
}

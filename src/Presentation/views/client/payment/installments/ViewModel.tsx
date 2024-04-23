import React, { useContext, useEffect, useState } from 'react'
import { GetInstallmentsMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetInstallmentsMercadoPago'
import { ResponseMercadoPagoCardToken } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoCardToken';
import { ShoppingBagContext } from '../../../../context/ShoppingBagContext';
import { PayerCost, ResponseMercadoPagoInstallments } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoInstallments';
import { CreatePaymentMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreatePaymentMercadoPago';
import { PaymentParams } from '../../../../../Data/sources/remote/models/PaymentParams';
import { UserContext } from '../../../../context/UserContext';
import { ResponseMercadoPagoPayment } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoPayment';

interface DropDownProps{
    label: string,
    value: string
}

export const ClientPaymentInstallmentsViewModel = (cardToken: ResponseMercadoPagoCardToken) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const {total, shoppingBag} = useContext(ShoppingBagContext);
    const {user} = useContext(UserContext);
    const [installments, setInstallments] = useState<PayerCost[]>([]);
    const [installmentsData, setInstallmentsData] = useState<ResponseMercadoPagoInstallments>();
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentData, setPaymentData] = useState<ResponseMercadoPagoPayment>();

    useEffect(() => {
        if (installments.length > 0) {
            setDropDownItems();
        }
    }, [installments])
    
    const createPayment = async () => {
        const data: PaymentParams = {
            installments: value!,
            issuer_id: installmentsData?.issuer.id!,
            payment_method_id: installmentsData?.payment_method_id!,
            transaction_amount: total,
            token: cardToken.id,
            payer:{
                email: user.email,
                identification:{
                    number: cardToken.cardholder.identification.number,
                    type: cardToken.cardholder.identification.type
                }
            },
            order: {
                id_client: user.id!,
                id_address: user.address?.id!,
                products: shoppingBag
            }
        }
        setLoading(true);
        const result = await CreatePaymentMercadoPagoUseCase(data);
        setPaymentData(result.data);
        setLoading(false);
        setResponseMessage(result.message);
    }

    const getInstallments = async () => {
        const result = await GetInstallmentsMercadoPagoUseCase(cardToken.first_six_digits, total);
        setInstallments(result.payer_costs);
        setInstallmentsData(result);
    }

    const setDropDownItems = () =>{
        let itemsDeliveryMen: DropDownProps[] = [];
        installments.forEach(i => {
            itemsDeliveryMen.push({
                label: i.recommended_message,
                value: i.installments.toString() 
            })
        });
        setItems(itemsDeliveryMen);
    }

  return {
    responseMessage,
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
    installments,
    getInstallments,
    createPayment,
    loading, 
    paymentData
  }
}

export default ClientPaymentInstallmentsViewModel

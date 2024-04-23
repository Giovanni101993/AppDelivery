import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { GetIdentificationTypesMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetIdentificationTypesMercadoPago';
import { IdentificationType } from '../../../../../Domain/entities/IdentificationType';
import { CreateCardTokenMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreateCardTokenMercadoPago';
import { CardTokenParams, Cardholder } from '../../../../../Data/sources/remote/models/CardTokenParams';
import { ResponseMercadoPagoCardToken } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoCardToken';
//@ts-ignore
import stripe from 'react-native-stripe-client';
import { CreatePaymentStripeUseCase } from '../../../../../Domain/useCases/stripe/CreatePaymentStripe';
import { ShoppingBagContext } from '../../../../context/ShoppingBagContext';
import { UserContext } from '../../../../context/UserContext';

interface DropDownProps{
  label: string,
  value: string
}
export const ClientPaymentFormViewModel = () => {

    const creditCardRef = useRef() as any;

    const [values, setValues] = useState({
        brand:'',
        cvv: '',
        expiration: '',
        holder: '',
        number: '',
    })

    const stripeClient = stripe("pk_test_51P8Esp01llpGp6R57PpqhTkfsXf6FeVuYPudhbQdnEmWdyQHF3Nr6E0W2wLQ8f6bKNoqJkqXnAIMeIxnsyhjKk7j001gChqfP2")
    const {total, shoppingBag} = useContext(ShoppingBagContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
      if (values.number !== '' && values.expiration !== '' && values.cvv !== '') {
        createTokenPayment();
      }
      else{
        console.log('DATOS INCORRECTOS'); 
      }
    }, [values])
    
    const createTokenPayment = async () =>{
      const response  = await stripeClient.createPaymentMethod("card",{
        number: values.number.replace(/\s/g, ''),
        exp_month: parseInt(values.expiration.split('/')[0]),
        exp_year: parseInt(values.expiration.split('/')[1]),
        cvc: values.cvv
      });
      console.log('RESPONSE STRIPE: '+ JSON.stringify(response, null, 3));
      if (response.id !== undefined && response.id !== null) {
        const result = await CreatePaymentStripeUseCase(response.id, total, {
          id_client: user.id!,
          id_address: user.address?.id!,
          products: shoppingBag
        })
        console.log('RESPONSE: ' + JSON.stringify(result, null, 3));
        
      }
    }

    const [identificationValues, setIdentificationValues] = useState({
      identificationNumber: '',
      identificationType: ''
    })

    const [identificationTypeList, setIdentificationTypeList] = useState<IdentificationType[]>([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const [cardToken, setCardToken] = useState<ResponseMercadoPagoCardToken>();
    
    useEffect(() => {
      onChange('identificationType', value)
    }, [value])

    useEffect(() => {
      if (
        values.brand !== '' &&
        values.cvv !== '' &&
        values.expiration !== '' &&
        values.holder !== '' &&
        values.number !== ''
      ) {
        createCardToken();
      }
    }, [values])

    useEffect(() => {
      setDropDownItems();
    }, [identificationTypeList])
    
    
    const getIdentificationTypes = async () =>{
      const result = await GetIdentificationTypesMercadoPagoUseCase();
      setIdentificationTypeList(result);
    }

    const createCardToken = async() => {
      const data: CardTokenParams = {
        card_number: values.number.replace(/\s/g, ''),
        expiration_year: values.expiration.split('/')[1],
        expiration_month: parseInt(values.expiration.split('/')[0]),
        security_code: values.cvv,
        cardholder: {
          name: values.holder,
          identification:{
            number: identificationValues.identificationNumber,
            type: identificationValues.identificationType
          }
        }
      }
      const result = await CreateCardTokenMercadoPagoUseCase(data);
      if (result) {
        if (result.id !== '') {
          setCardToken(result);
        }
      }
      console.log('RESPONSE MERCADOPAGO CARD TOKEN: '+ JSON.stringify(result, null, 3));
    }

    const onChange = (property: string, value: any) => {
      setIdentificationValues({ ...identificationValues, [property]: value });
    };

    const setDropDownItems = () =>{
      let itemsIdentification: DropDownProps[] = [];
      identificationTypeList.forEach(identification => {
          itemsIdentification.push({
              label: identification.name,
              value: identification.id! 
          })
      });
      setItems(itemsIdentification);
  }

    const handleSubmit = useCallback(() => {
        if (creditCardRef.current) {
          const { error, data } = creditCardRef.current.submit();
            if(error === null){
                setValues(data);
                console.log();
                
            }
          console.log('ERROR: ', error);
          console.log('CARD DATA: ', data);
        }
      }, []);


    return{
        ...identificationValues,
        cardToken,
        createCardToken,
        onChange,
        open,
        value,
        items,
        setOpen,
        setValue,
        setItems,
        creditCardRef,
        handleSubmit,
        identificationTypeList,
        getIdentificationTypes
    }
}

export default ClientPaymentFormViewModel;

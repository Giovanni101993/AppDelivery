import {useContext, useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { ResponseAPIDelivery } from '../../../../../Data/sources/remote/models/ResponseApiDelivery';
import { Payment } from '../../../../../Domain/entities/Payment';
import { PaymentContext } from '../../../../context/PaymentContext';

const AdminPaymentUpdateViewModel = (payment: Payment) => {

    const [responseMessage, setResponseMessage ] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const {update, updateWithImage} = useContext(PaymentContext); 

    const [values, setValues] = useState(payment);

    const onChange=(property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const updatePayment = async () => {
        setLoading(true);
        let response = {} as ResponseAPIDelivery;
        if(values.codeQR.includes('https://')){
            response = await update(values);
        }
        else{
            response = await updateWithImage(values, file!);
        }
        setLoading(false);
        setResponseMessage(response.message);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled){
            onChange('codeQR', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    return{
        ...values,
        onChange,
        pickImage,
        updatePayment,
        loading,
        responseMessage,
    }
}

export default AdminPaymentUpdateViewModel;
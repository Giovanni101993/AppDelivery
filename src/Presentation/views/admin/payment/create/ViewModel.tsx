import React, {useContext, useEffect, useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { PaymentContext } from '../../../../context/PaymentContext';
import { UserContext } from '../../../../context/UserContext';

const AdminPaymentCreateViewModel = () => {

    const [responseMessage, setResponseMessage ] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const {create, payment} = useContext(PaymentContext)
    const {user} = useContext(UserContext);

    useEffect(() => {
        if(user.id == ''){
            onChange('id_user', user.id);
        }
    }, [user])

    const [values, setValues] = useState({
        codeQR: '',
        bank: '',
        phone: '',
        id_user: user.id
    });

    const onChange=(property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const createPayment = async () => {
        if (isValidForm()){
            console.log('VALORES:', values);
            setLoading(true);
            const response = await create(values as any, file!);
            setLoading(false);
            setResponseMessage(response.message);
            if(response.success){
                resetForm();
            }
        }
    }

    const isValidForm = (): boolean =>{
        if (values.bank === ''){
            setErrorMessage('Ingresa la entidad bancaria'); 
            return false;
        }
        if (values.phone === ''){
            setErrorMessage('Ingresa el número de celular'); 
            return false;
        }
        if (values.codeQR === ''){
            setErrorMessage('Seleccione una imagen');
            return false;
        }
        return true;
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            quality: 1
        });

        if(!result.canceled){
            onChange('codeQR', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const resetForm = async () =>{
        setValues({
            codeQR: '',
            bank: '',
            phone: '',
            id_user: user.id
        }
        )
    }
  
    return{
        ...values,
        onChange,
        pickImage,
        loading,
        errorMessage,
        responseMessage,
        createPayment
    }
}

export default AdminPaymentCreateViewModel;
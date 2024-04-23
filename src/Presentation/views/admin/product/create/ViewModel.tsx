import React, {useContext, useEffect, useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/category/CreateCategory';
import { CategoryContext } from '../../../../context/CategoryContext';
import { Category } from '../../../../../Domain/entities/Category';
import { ProductContext } from '../../../../context/ProductContext';
import { useUserLocal } from '../../../../hooks/useUserLocal';
import { User } from '../../../../../Domain/entities/User';


const AdminProductCreateViewModel = (category: Category, user: User) => {
    
    const [values, setValues] = useState({
        name: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        id_category: category.id,
        id_user: user.id,
        price: undefined,
    });   
    
    const [responseMessage, setResponseMessage ] = useState('');
    const [loading, setLoading] = useState(false);
    const [file1, setFile1] = useState<ImagePicker.ImagePickerAsset>();
    const [file2, setFile2] = useState<ImagePicker.ImagePickerAsset>();
    const [file3, setFile3] = useState<ImagePicker.ImagePickerAsset>();
    const {create} = useContext(ProductContext);

    
    
    const onChange=(property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const createProduct = async () => {
        console.log('Producto: ' + JSON.stringify(values));
        
        let files = [];
        files.push(file1!);
        files.push(file2!);
        files.push(file3!);

        setLoading(true);
        const response = await create(values as any, files);
        setLoading(false);
        setResponseMessage(response.message);
        if(response.success){
            resetForm();
        }
    }

    const pickImage = async (numberImage: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled){
            if(numberImage == 1){
                onChange('image1', result.assets[0].uri);
                setFile1(result.assets[0]);
            }
            else if(numberImage == 2){
                onChange('image2', result.assets[0].uri);
                setFile2(result.assets[0]);
            }
            else if(numberImage == 3){
                onChange('image3', result.assets[0].uri);
                setFile3(result.assets[0]);
            }
        }
    }

    const takePhoto = async (numberImage: number) => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if(!result.canceled){
            if(numberImage == 1){
                onChange('image1', result.assets[0].uri);
                setFile1(result.assets[0]);
            }
            else if(numberImage == 2){
                onChange('image2', result.assets[0].uri);
                setFile2(result.assets[0]);
            }
            else if(numberImage == 3){
                onChange('image3', result.assets[0].uri);
                setFile3(result.assets[0]);
            }
        }
    }

    const resetForm = async () =>{
       setValues({
        name: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        price: undefined,
        id_category: category.id,
        id_user: user.id
        }
        )
    }
  
    return{
        ...values,
        onChange,
        takePhoto,
        pickImage,
        loading,
        responseMessage,
        createProduct, 
        resetForm
    }
}

export default AdminProductCreateViewModel;
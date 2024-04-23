import React from 'react'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository';
import { Category } from '../../entities/Category';
import * as ImagePicker from 'expo-image-picker';

const {create} = new CategoryRepositoryImpl();

export const CreateCategoryUseCase = async(category: Category, file: ImagePicker.ImagePickerAsset) => {
  
    return await create(category, file);
}

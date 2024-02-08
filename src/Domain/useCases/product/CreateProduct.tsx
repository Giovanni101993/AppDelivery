import React from 'react'
import { Product } from '../../entities/Product'
import * as ImagePicker from 'expo-image-picker';
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository';

const {create} = new ProductRepositoryImpl();

export const CreateProductUseCase = async (product: Product, files: ImagePicker.ImagePickerAsset[]) => {
  return await create(product, files);
}

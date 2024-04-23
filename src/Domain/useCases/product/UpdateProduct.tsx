import React from 'react'
import { ProductRepositoryImpl } from "../../../Data/repositories/ProductRepository";
import { Product } from '../../entities/Product';

const {update} = new ProductRepositoryImpl();

export const UpdateProductUseCase = async (product: Product) => {
  return await update(product);
}

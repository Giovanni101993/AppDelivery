import React from 'react'
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository'

const {getProductsByUser} = new ProductRepositoryImpl();

export const GetProductsByUserUseCase = async(idUser: string, idCategory: string) => {
  return await getProductsByUser(idUser, idCategory);
}
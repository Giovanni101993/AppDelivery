import React from 'react'
import { ShoppingBagRepositoryImpl } from "../../../Data/repositories/ShoppingBagRepository";

const {save} = new ShoppingBagRepositoryImpl();

import { Product } from "../../entities/Product";

export const SaveShoppingBagUseCase = async (products: Product[]) => {
  return await save(products);
}

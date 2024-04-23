import React from 'react'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository';

const {remove} = new CategoryRepositoryImpl();

export const DeleteCategoryUseCase = async(id: string) => {
  
    return await remove(id);
}

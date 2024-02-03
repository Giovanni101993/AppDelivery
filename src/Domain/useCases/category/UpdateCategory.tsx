import React from 'react'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository';
import { Category } from '../../entities/Category';

const {update} = new CategoryRepositoryImpl();

export const UpdateCategoryUseCase = async(category: Category) => {
  
    return await update(category);
}

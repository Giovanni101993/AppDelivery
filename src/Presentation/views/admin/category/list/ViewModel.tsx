import React, { useContext, useState } from 'react'
import { Category } from '../../../../../Domain/entities/Category';
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

export const AdminCategoryListViewModel = () => {

    const [responseMessagge, setResponseMessagge] = useState('');
    const {categories, getCategories, remove} = useContext(CategoryContext);

    

    const deleteCategory = async (idCategory: string) => {
      const result = await remove(idCategory);
      setResponseMessagge(result.message);
    }

  return{
    categories,
    responseMessagge,
    getCategories,
    deleteCategory
  }
}
export default AdminCategoryListViewModel;
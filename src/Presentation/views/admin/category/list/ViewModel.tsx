import React, { useContext, useState } from 'react'
import { Category } from '../../../../../Domain/entities/Category';
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory';
import { CategoryContext } from '../../../../context/CategoryContext';
import { UserContext } from '../../../../context/UserContext';


export const AdminCategoryListViewModel = () => {

    const [responseMessagge, setResponseMessagge] = useState('');
    const {categories, remove} = useContext(CategoryContext);
    const {user} =useContext(UserContext);

    

    const deleteCategory = async (idCategory: string) => {
      const result = await remove(idCategory);
      setResponseMessagge(result.message);
    }

  return{
    categories,
    user,
    responseMessagge,
    deleteCategory
  }
}
export default AdminCategoryListViewModel;
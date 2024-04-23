import React, { useContext, useState } from 'react'
import { CategoryContext } from '../../../../context/CategoryContext';
import { UserContext } from '../../../../context/UserContext';


export const ShopCategoryListViewModel = () => {

    const [responseMessagge, setResponseMessagge] = useState('');
    const {categories} = useContext(CategoryContext);
    const {user} =useContext(UserContext);
  

  return{
    categories,
    user,
    responseMessagge
  }
}
export default ShopCategoryListViewModel;
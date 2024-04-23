import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../../context/ProductContext'
import { Product } from '../../../../../Domain/entities/Product';
import { Category } from '../../../../../Domain/entities/Category';
import { User } from '../../../../../Domain/entities/User';
import { UserContext } from '../../../../context/UserContext';

export const AdminProductListViewModel = () => {
  
  const {products, getProductsByUser, remove} = useContext(ProductContext);

  const [responseMessagge, setResponseMessagge] = useState('');

  const deleteProduct = async (product:Product) => {
    const result = await remove(product);
    setResponseMessagge(result.message);
  }
  return {
        products,
        responseMessagge,
        getProductsByUser,
        deleteProduct
    }
}

export default AdminProductListViewModel;
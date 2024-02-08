import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../../context/ProductContext'
import { Product } from '../../../../../Domain/entities/Product';

export const AdminProductListViewModel = () => {
  
  const {products, getProducts, remove} = useContext(ProductContext);
  const [responseMessagge, setResponseMessagge] = useState('');

  const deleteProduct = async (product:Product) => {
    const result = await remove(product);
    setResponseMessagge(result.message);
  }
  return {
        products,
        responseMessagge,
        getProducts,
        deleteProduct
    }
}

export default AdminProductListViewModel

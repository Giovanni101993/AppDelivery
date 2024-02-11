import React, { useState } from 'react'
import { GetProductsByCategoryUseCase } from '../../../../../Domain/useCases/product/GetProductsByCategory';
import { Product } from '../../../../../Domain/entities/Product';

export const ClientProductListViewModel = () => {
  
    const [products, setProducts] = useState<Product[]>([]);
    
    const getProducts = async (idCategory: string) => {
        const result = await GetProductsByCategoryUseCase(idCategory);
        setProducts(result);
    }
    return {
        products,
        getProducts
    }
}

export default ClientProductListViewModel;

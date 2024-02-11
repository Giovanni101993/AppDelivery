import React, { useContext } from 'react'
import { ShoppingBagContext } from '../../../context/ShoppingBagContext';
import { Product } from '../../../../Domain/entities/Product';

export const ClientShoppingBagViewModel = () => {

    const {shoppingBag, saveItem, deleteItem, total} = useContext(ShoppingBagContext);
  
    const addItem = async (product: Product) => {
        product.quantity! += 1;
        await saveItem(product);
    }

    const subtractItem = async (product: Product) => {
        if(product.quantity! > 1){
            product.quantity! -= 1;
            await saveItem(product);
        }
    }

    return {
        shoppingBag, 
        total,
        addItem,
        subtractItem,
        deleteItem
    }
}

export default ClientShoppingBagViewModel;

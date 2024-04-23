import { Product } from "../entities/Product";

export interface ShoppingBagRepository{
    save(products: Product[]): Promise<void>;
    getShoppingBag(): Promise<Product[]>;
}
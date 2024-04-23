import { User } from "./User";

export interface Product {
        id: string;
        name: string;
        description: string;
        image1: string;
        image2: string;
        image3: string;
        price: number;
        id_category: string | undefined;
        id_user: string | undefined;
        quantity?: number;
        admin?: User;
}
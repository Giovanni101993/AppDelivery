import { Address } from "./Address";
import { Product } from "./Product";
import { User } from "./User";

export interface Order{
    id?: string;
    id_client: string;
    id_delivery?: string;
    //id_store: string;
    id_address: string;
    status?: string,
    lat?: number;
    lng?: number;
    timestamp?: number;
    client?: User;
    delivery?: User;
    store?: User;
    address?: Address;
    products: Product[];
}
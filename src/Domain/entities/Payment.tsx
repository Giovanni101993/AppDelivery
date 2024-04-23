import { User } from "./User";

export interface Payment {
    id: string;
    codeQR: string;
    bank: string;
    phone: string;
    id_user: string | undefined;
    shop: User;
}
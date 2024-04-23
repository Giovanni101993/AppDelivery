import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Address } from "../entities/Address";

export interface AddressRepository{

    create (address: Address): Promise<ResponseAPIDelivery>;
    getByUser(idUser: string): Promise<Address[]>;
}
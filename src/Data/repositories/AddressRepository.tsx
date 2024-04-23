import { AddressRepository } from "../../Domain/repositories/AddressReporitory";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { Address } from "../../Domain/entities/Address";


export class AddressRepositoryImpl implements AddressRepository{
    async getByUser(idUser: string): Promise<Address[]>{
        try {
            const response = await ApiDelivery.get<Address[]>(`/address/findByUser/${idUser}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async create(address: Address): Promise<ResponseAPIDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseAPIDelivery>('/address/create', address);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
            
        }
    }
}
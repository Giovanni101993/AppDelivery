import { AddressRepositoryImpl } from "../../../Data/repositories/AddressRepository";

const {getByUser} = new AddressRepositoryImpl();

export const GetByUserAddressUseCase = async (idUser: string) => {
    return await getByUser(idUser);
}
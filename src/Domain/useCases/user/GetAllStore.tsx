import React from 'react'
import { UserRepositoryImpl } from '../../../Data/repositories/UserRepository'

const {getAllStore} = new UserRepositoryImpl();

export const GetAllStoreUseCase = async () => {
  return await getAllStore();
}

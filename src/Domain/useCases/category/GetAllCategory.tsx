import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

const {getAll} = new CategoryRepositoryImpl();

export const GetAllCategoryUseCase =  async () => {
  return await getAll();
}

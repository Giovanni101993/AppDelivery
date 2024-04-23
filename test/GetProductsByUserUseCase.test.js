import { GetProductsByUserUseCase } from './GetProductsByUserUseCase';
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository';

// Mock para simular el repositorio de productos
jest.mock('/src/Data/repositories/ProductRepository.tsx')

// Describe el bloque de pruebas para GetProductsByUserUseCase
describe('GetProductsByUserUseCase', () => {
  it('debería obtener productos por usuario y categoría correctamente', async () => {
    // Mock de los datos esperados
    const mockProducts = [
      { id: '1', name: 'Producto 1', price: 10 },
      { id: '2', name: 'Producto 2', price: 20 },
    ];

    // Configura el comportamiento del mock del repositorio de productos
    ProductRepositoryImpl.mockImplementation(() => ({
      getProductsByUser: jest.fn().mockResolvedValue(mockProducts),
    }));

    // Llama al caso de uso con parámetros simulados
    const userId = '123';
    const categoryId = '456';
    const products = await GetProductsByUserUseCase(userId, categoryId);

    // Verifica que la función del repositorio de productos haya sido llamada con los parámetros correctos
    expect(ProductRepositoryImpl().getProductsByUser).toHaveBeenCalledWith(userId, categoryId);

    // Verifica que los productos devueltos coincidan con los datos esperados
    expect(products).toEqual(mockProducts);
  });

  it('debería manejar errores correctamente', async () => {
    // Configura el comportamiento del mock del repositorio de productos para simular un error
    ProductRepositoryImpl.mockImplementation(() => ({
      getProductsByUser: jest.fn().mockRejectedValue(new Error('Error simulado')),
    }));

    // Llama al caso de uso con parámetros simulados
    const userId = '123';
    const categoryId = '456';

    // Verifica que el caso de uso lance un error correctamente
    await expect(GetProductsByUserUseCase(userId, categoryId)).rejects.toThrowError('Error simulado');
  });
});

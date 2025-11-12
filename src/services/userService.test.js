
//Exemplo de Teste1

jest.mock('../models/UserModel', () => ({
  getAllUsers: jest.fn(async () => [
    { id: 1, name: 'Dani', email: 'dani@example.com' },
    { id: 2, name: 'Agatha', email: 'agatha@example.com' }
  ]),
  getUserById: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn()
}));

const userService = require('./userService');

test('Deve retornar lista de usuários', async () => {
  const result = await userService.listUsers();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

//Exemplo de Teste2
test('Deve verificar se a função createUser está definida', () => {
  expect(typeof userService.createUser).toBe('function');
});

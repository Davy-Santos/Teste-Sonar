//Exemplo de Teste1
const userController = require('./userController');

test('Deve verificar se a função listUsers é definida', () => {
  expect(typeof userController.listUsers).toBe('function');
});



//Exemplo de Teste2
test('Deve verificar se a função createUser está definida', () => {
  expect(typeof userController.createUser).toBe('function');
});

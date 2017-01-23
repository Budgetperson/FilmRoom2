import { addPlayer, deletePlayer } from './playerActions';

it('generates correct addPlayer actions', () => {
  expect(addPlayer('').type).toBe('ADD_PLAYER');
  expect(addPlayer('Yash').name).toBe('Yash');
});

it('generates correct deletePlayer actions', () => {
  expect(deletePlayer(0).type).toBe('DELETE_PLAYER');
  expect(deletePlayer(1).id).toBe(1);
});

import players from './players';
import { addPlayer, deletePlayer } from '../actions/playerActions';

it('adds players', () => {
  let add_action = addPlayer('John');
  let new_state = players([], add_action);
  expect(new_state.length).toBe(1);
  expect(new_state[0]).toEqual({id: 0, name: 'John'});

  let old_state = new_state;
  new_state = players(old_state, addPlayer('Yash'));
  expect(new_state.length).toBe(2);
  expect(new_state[1]).toEqual({id: 1, name: 'Yash'});
});

it('deletes players', () => {
  let old_state = [{id: 0, name: 'Yash'}];
  let new_state = players(old_state, deletePlayer(1));
  expect(old_state).toEqual(new_state);
})

it('does nothing if action unknown', () => {
  expect(players([], 'LOREM_IPSUM')).toEqual([]);
})

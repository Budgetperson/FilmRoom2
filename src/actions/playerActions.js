import { makeActionCreator } from './helpers';

export const addPlayer = makeActionCreator('ADD_PLAYER', 'name');
export const deletePlayer = makeActionCreator('DELETE_PLAYER', 'id');

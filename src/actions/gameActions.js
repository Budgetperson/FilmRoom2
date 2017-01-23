import { makeActionCreator } from './helpers';

export const addGame = makeActionCreator('ADD_GAME', 'fields');
export const deletePlayer = makeActionCreator('DELETE_GAME', 'id');

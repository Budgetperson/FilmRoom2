import { makeActionCreator } from './helpers';

export const updateTime = makeActionCreator('UPDATE_TIME', 'time');

export const updateLineup = (index_to_update, player_id) => {
  return {
    type: 'UPDATE_LINEUP',
    index_to_update, player_id: parseInt(player_id, 10)
  }
}

export const updateCurrentEvent = makeActionCreator('UPDATE_CURRENT_EVENT', 'eventComponent');

let prefill = {
  lineup: [null, null, null, null, null],
  currentTime: 0,
  currentEvent: null
}

const workspace = (state = prefill, action) => {
  switch(action.type) {
    case 'UPDATE_TIME':
      let currentTime = action.time
      return {...state, currentTime }
    case 'UPDATE_LINEUP':
      let { index_to_update, player_id } = action;
      let lineup = state.lineup.slice(0)
      lineup[index_to_update] = player_id;
      return {...state, lineup };
    case 'UPDATE_CURRENT_EVENT':
      let { eventComponent } = action;
      return { ...state, currentEvent: eventComponent };
    default:
      return state;
  }
}

export default workspace;

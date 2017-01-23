let prefill = [
  {
    id: 0,
    opponent: 'Opponent',
    points_scored: 20,
    opponent_points_scored: 70,
    possessions: []
  }
]

const games = (state = prefill, action) => {
  switch(action.type) {
    case 'ADD_GAME':
      let id = state.length;
      let game = { id, ...action.fields };
      return [...state, game];
    case 'DELETE_GAME':
      let deleted_id = action.id;
      return state.filter((game) => game.id !== deleted_id)
    default:
      return state;
  }
}

export default games;

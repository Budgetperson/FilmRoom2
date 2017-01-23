const playersBootstrap = [
  {id: 0, name: 'Yash'},
  {id: 1, name: 'Quinn'},
  {id: 2, name: 'Tej'},
  {id: 3, name: 'Sam'},
  {id: 4, name: 'Nimish'},
  {id: 5, name: 'Jaydeep'}
]

const players = (state = playersBootstrap, action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      let id = state.length;
      let player = {
        id,
        name: action.name
      }
      return [...state, player];
    case 'DELETE_PLAYER':
      let deleted_id = action.id;
      return state.filter((player) => player.id !== deleted_id)
    default:
      return state;
  }
}

export default players;

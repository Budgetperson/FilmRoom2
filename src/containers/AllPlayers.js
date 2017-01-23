import { connect } from 'react-redux'
import Players from '../components/Players'
import { deletePlayer } from '../actions/playerActions'

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (id) => dispatch(deletePlayer(id))
  };
}

const AllPlayers = connect(mapStateToProps, mapDispatchToProps)(Players)

export default AllPlayers;

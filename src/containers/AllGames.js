import { connect } from 'react-redux'
import GamesList from '../components/GamesList'
import { deleteGame } from '../actions/gameActions'

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (id) => dispatch(deleteGame(id))
  };
}

const AllGames = connect(mapStateToProps, mapDispatchToProps)(GamesList)

export default AllGames;

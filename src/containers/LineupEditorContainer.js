import { connect } from 'react-redux'
import LineupEditor from '../components/gameEditing/LineupEditor'
import { updateLineup } from '../actions/workspaceActions'

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.players,
    currentLineupIds: state.workspace.lineup
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePlayerAt: (i, newId) => dispatch(updateLineup(i, newId))
  };
}

const LineupEditorContainer = connect(mapStateToProps, mapDispatchToProps)(LineupEditor)

export default LineupEditorContainer;

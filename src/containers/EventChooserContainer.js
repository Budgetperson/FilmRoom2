import { connect } from 'react-redux'
import EventChooser from '../components/gameEditing/EventChooser'
import { updateCurrentEvent } from '../actions/workspaceActions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentEvent: state.workspace.currentEvent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCurrentEvent: (eventComponent) => dispatch(updateCurrentEvent(eventComponent))
  };
}

const EventChooserContainer = connect(mapStateToProps, mapDispatchToProps)(EventChooser)

export default EventChooserContainer;

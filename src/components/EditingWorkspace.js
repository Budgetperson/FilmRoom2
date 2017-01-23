import React, { Component } from 'react';
import FakeGameVideo from './FakeGameVideo';
import LineupEditorContainer from '../containers/LineupEditorContainer';
import EventChooserContainer from '../containers/EventChooserContainer';
// import GameEditingInterface from 'GameEditingInterface';

const EditingWorkspace = ({ game }) => (
  <div className="pure-g">
    <div className="pure-u-1-3"><FakeGameVideo /></div>
    <div className="pure-u-1-3">
      <LineupEditorContainer />
      <EventChooserContainer />
    </div>
    <div className="pure-u-1-3">
      fuck me
    </div>
  </div>
)

export default EditingWorkspace;

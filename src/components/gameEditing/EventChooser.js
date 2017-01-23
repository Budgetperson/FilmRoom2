import React, { Component } from 'react';
import * as eventEntryComponents from './eventEntry';

const EventChooser = ({ currentEvent, updateCurrentEvent }) => {

  const selectValue = currentEvent !== null ? currentEvent : 'none';

  const handleEventChange = (e) => updateCurrentEvent(e.target.value);

  return (
    <div className="eventChooser">
      <select value={selectValue} onChange={handleEventChange}>
        <option value="none">None</option>
        {Object.entries(eventEntryComponents).map(([name, component]) => {
          return (<option value={name}>{name}</option>);
        })}
      </select>
    </div>
  );
};

export default EventChooser;

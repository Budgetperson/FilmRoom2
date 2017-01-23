import React, { Component } from 'react';

const FakeGameVideo = ({ onProgressUpdate }) => {
  const handleVideoUpdate = (e) => onProgressUpdate(e.target.value);

  return (
    <form className="pure-form pure-form-stacked">
      <fieldset>
        <label htmlFor="time">Video Time</label>
        <input onChange={handleVideoUpdate} id="time" type="number" placeholder="Video Time"></input>
      </fieldset>
    </form>
  );
}

export default FakeGameVideo;
